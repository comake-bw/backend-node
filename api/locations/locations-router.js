const router = require('express').Router();

const Posts = require('./post-model');

router.get('/:username', async (req, res) => {
	const { username } = req.params;
	try {
		const posts = await Posts.findByUsername(username);
		res.status(200).json(posts);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

module.exports = router;
