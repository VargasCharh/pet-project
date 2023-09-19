import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import apiMulterRouter from './routes/apiMulterRouter';
import apiProfileRouter from './routes/apiProfileRouter';
import apiAuthRouter from './routes/apiAuthRouter';
import apiTheoryQuestionRouter from './routes/apiTheoryQuestionRouter';
import apiNewQuestionRouter from './routes/apiNewQuestions';
import apiAdminQuestionRouter from './routes/apiAdminQuestionRouter';
import apiForumRouter from './routes/apiForumRouter';
import apiTeamRouter from './routes/apiTeamRouter';
import { connectionCb, upgradeCb, wss } from '../webSocket';

const http = require('http');
const sessionParser = require('./middleware/sessionMiddle');

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3001;
const app = express();
app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));


const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true,
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});

app.use(sessionParser);

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
});

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/api/multer', apiMulterRouter);
app.use('/api/profile', apiProfileRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/api/theoryQuestion', apiTheoryQuestionRouter);
app.use('/api/newQuestion', apiNewQuestionRouter);
app.use('/api/adminQuestion', apiAdminQuestionRouter);
app.use('/api/forum', apiForumRouter);
app.use('/api/team', apiTeamRouter);

const server = http.createServer(app);
server.on('upgrade', upgradeCb);
wss.on('connection', connectionCb);

server.listen(PORT, () => console.log(`App has started on port ${PORT}`));
