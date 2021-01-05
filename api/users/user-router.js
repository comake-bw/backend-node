const router = require('express').Router();

const Users = require('./user-model');
const Locations = require('../locations/locations-model');
const restricted = require('../middleware/restricted');

router.get('/', restricted, async (req, res) => {});

// add user
router.delete('/:username', restricted, async (req, res) => {
	const { username } = req.params;
	try {
		await Users.remove(username);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

// delete user

module.exports = router;
