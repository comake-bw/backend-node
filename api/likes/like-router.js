const router = require('express').Router();

const Likes = require('./like-model');

// middleware
const restricted = require('../middleware/restricted');

// 🌕   [POST] - like post
router.post('/like', restricted, async (req, res) => {
	const { postId } = req.body;
	try {
		const like = await Likes.addLike(postId, process.env.USER_ID);
		res.status(201).json(like);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

// 🌕   [DELETE] - delete post
router.delete('/unlike', restricted, async (req, res) => {
	const { postId } = req.body;
	try {
		await Likes.removeLike(postId, process.env.USER_ID);
		res.status(200).json({ message: `post with id ${postId} unliked` });
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

module.exports = router;
