const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('./users/user-router');
const authRouter = require('./auth/auth-router');
const postsRouter = require('./posts/post-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

server.get('/', (_, res) => {
	res.json({ api: 'running' });
});

module.exports = server;
