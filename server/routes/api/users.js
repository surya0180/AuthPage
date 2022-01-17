import express from 'express'
import { check, validationResult } from 'express-validator'
import User from '../../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

// @route   GET api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('firstname', 'firstname is required').not().isEmpty(),
    check('lastname', 'lastname is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('phone', 'phone is required').not().isEmpty(),
    check('address', 'address is required').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { firstname, lastname, email, phone, address, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }

        user = new User({
            firstname, lastname, email, phone, address, password
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save()
        const payload = {
            user: {
                id: user.id,
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err
            res.json({ token });
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error')
    }
})

export default router