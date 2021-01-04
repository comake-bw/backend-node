const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// usersRouter
// authRouter
const postsRouter = require('./posts/post-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// .use usersRouter
// .use authRouter
server.use('/api/posts', postsRouter);
// need authenticate middleware

server.get('/', (req, res) => {
	res.json({ api: 'running' });
});

module.exports = server;
