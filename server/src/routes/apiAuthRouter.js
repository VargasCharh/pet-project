const jwt = require('jsonwebtoken');
const get = require('lodash/get');

const apiAuthRouter = require('express').Router();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const getGitHubUser = require('../utils/getGitHubUser').default;

const { User } = require('../../db/models');
const sendEmail = require('../../nodemailer');

apiAuthRouter.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    res.status(400).json({ message: 'no user full data' });
    return;
  }
  const searchEmail = await User.findOne({
    where: { email },
  });
  if (searchEmail) {
    res.status(400).json({ message: 'email exists' });
    return;
  }
  const confirmCode = crypto.randomBytes(20).toString('hex');

  const hashPass = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashPass,
    confirmCode,
  });
  sendEmail(newUser, confirmCode);

  res.json({ message: 'На указанную Вами почту отправлено подтверждение' });
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'no user full data' });
    return;
  }
  const currentUser = await User.findOne({
    where: { email },
  });
  if (!currentUser || !(await bcrypt.compare(password, currentUser.password))) {
    res.status(401).json({ message: 'email not exists' });
    return;
  }

  req.session.user = currentUser;
  res.json(req.session.user);
});

apiAuthRouter.get('/check', (req, res) => {
  if (!req.session.user) {
    res.status(401).json({ message: 'no cookies' });
    return;
  }
  res.json(req.session.user);
});

apiAuthRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.clearCookie('github-jwt');
  res.sendStatus(200);
});

// !!!!!!!!!!!!!!!!!!!!!подтвержение регистрации!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

apiAuthRouter.get('/confirm/:confirmCode', async (req, res) => {
  try {
    const { confirmCode } = req.params;
    const searchUser = await User.findOne({ where: { confirmCode } });

    if (!searchUser) {
      res.status(400).json({ message: 'невереный код подтверждения' });
    }

    searchUser.confirm = true;
    await searchUser.save();

    req.session.user = searchUser;
    res.redirect('http://localhost:3000/profile');
  } catch (error) {
    console.log(error);
  }
});

// !!!!!!!!!!!!!!!!!!!!!GITHUB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const COOKIE_NAME = 'github-jwt';
const secret = 'shhhhhhhhhhhh';

apiAuthRouter.get('/github', async (req, res) => {
  try {
    const code = get(req, 'query.code');
    if (!code) {
      throw new Error('No code!');
    }

    const gitHubUser = await getGitHubUser({ code });

    const [newUser] = await User.findOrCreate({
      where: { linkgit: gitHubUser.html_url },
      defaults: {
        id: gitHubUser.id,
        name: gitHubUser.name,
        avatar: gitHubUser.avatar_url,
      },
    });

    req.session.user = {
      id: newUser.id,
      name: newUser.name,
      linkgit: gitHubUser.html_url,
      avatar: gitHubUser.avatar_url,
      gitAuth: true,
    };

    const token = jwt.sign(gitHubUser, secret);

    res.cookie(COOKIE_NAME, token, {
      httpOnly: true,
      domain: 'localhost',
    });

    res.redirect(`http://localhost:3000/profile`);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

module.exports = apiAuthRouter;
