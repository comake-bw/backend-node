const router = require('express').Router();

const Posts = require('./post-model');
// const restricted

// 🌕   [GET] - all posts globally
router.get('/', async (_, res) => {
	try {
		const posts = await Posts.find();
		res.status(200).json(posts);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

// 🌕   [GET] - all posts for single location
router.get('/z/:zipCode', async (req, res) => {
	const { zipCode } = req.params;
	try {
		const posts = await Posts.findByZipCode(zipCode);
		res.status(200).json(posts);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

// 🌕   [GET] - all posts by single user
router.get('/u/:username', async (req, res) => {
	const { username } = req.params;
	try {
		const posts = await Posts.findByUsername(username);
		res.status(200).json(posts);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

// 🌕   [GET] - all likes on specific post
router.get('/p/:postId/likes', async (req, res) => {
	const { postId } = req.params;
	try {
		const likes = await Posts.getLikes(postId);
		res.status(200).json(likes);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

// 🌕   [GET] - all likes on specific post
router.get('/u/:username/liked', async (req, res) => {
	const { username } = req.params;
	try {
		const likedPosts = await Posts.getLikedPosts(username);
		res.status(200).json(likedPosts);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: err.message });
	}
});

module.exports = router;