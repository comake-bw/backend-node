const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// usersRouter
// authRouter

const server = express();

server.use(express.json());
server.use(helmet);
server.use(cors());

// .use usersRouter
// .use authRouter

server.get('/', (req, res) => {
	res.join({ api: 'running' });
});

module.exports = server;
