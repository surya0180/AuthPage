import express from 'express'

const router = express.Router()

// @route   GET api/posts
// @desc    Test Route
// @access  Public
router.get('/', (req, res) => res.send('Posts Route'))

export default router