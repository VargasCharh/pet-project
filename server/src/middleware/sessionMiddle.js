const session = require('express-session');
const store = require('session-file-store');
require('dotenv').config();

const FileStore = store(session);

const sessionParser =  session({
  name: 'user_sid',
  secret: 'rjfhjvlkdsfklsdkldsfklsdkl',
  resave: true,
  store: new FileStore({}),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
});

module.exports = sessionParser;
