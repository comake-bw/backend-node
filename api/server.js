const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const usersRouter = require('./users/user-router');
const authRouter = require('./auth/auth-router');
const postsRouter = require('./posts/post-router');
const likesRouter = require('./likes/like-router');

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use('/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);
server.use('/api/likes', likesRouter);

server.get('/', (_, res) => {
	res.json({ api: 'running' });
});

module.exports = server;
