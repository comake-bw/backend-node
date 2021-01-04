const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');
const makeToken = require('./makeToken');

// MIDDLEWARE
const validateCredentials = require('../middleware/validateCredentials');

router.post('/register', validateCredentials, async (req, res) => {
	console.log('register');
	const rounds = process.env.BCRYPT_ROUNDS || 10;
	const hash = bcrypt.hashSync(req.user.password, rounds);
	req.user.password = hash;
	try {
		const user = Users.add(req.user);
		res.status(201).json(user);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

router.post('/login', validateCredentials, async (req, res) => {
	console.log('login endpoint');
	try {
		const user = await Users.findBy({ username: req.user.username });
		if (user && bcrypt.compareSync(req.user.password, user.password)) {
			const token = makeToken(user);
			res
				.status(200)
				.json({ message: `welcome ${user.username}`, token: token });
		} else {
			res.status(401).json({ errMessage: 'invalid credentials' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json('500 error');
	}
});

module.exports = router;
