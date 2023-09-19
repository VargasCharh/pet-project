import express from 'express';
import sharp from 'sharp';
import fs from 'fs/promises';
import { User } from '../../db/models'
import upload from '../middleware/multerMW';

const apiProfileRouter = express.Router();

apiProfileRouter.get('/', async (req, res) => {
  try {
    const usersForTop = await User.findAll();
    const sortedUsers = usersForTop.sort((a, b) => b.score - a.score)
    res.json(sortedUsers).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
})

apiProfileRouter.patch('/:id', upload.single('file'), async (req, res) => {
  const { name, email, linkgit, linklinked } = req.body;

  try {
  const nameImg = `${Date.now()}.webp`;
  const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
  await fs.writeFile(`./public/img/${nameImg}`, outputBuffer);
  const user = await User.update({name, email, linkgit, linklinked, avatar: `/img/${nameImg}`}, { where: { id: req.params.id } });
  const updatedUser = await User.findByPk(req.params.id);
  req.session.user = updatedUser;
  res.json(updatedUser).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default apiProfileRouter;
