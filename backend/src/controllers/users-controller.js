import User from '../models/user.js'
import bcrypt from 'bcryptjs'

const saltRounds = 11

export const createUser = async (req, res) => {
	const { name, email, password } = req.body

	try {
		if (!name || !email || !password)
			return res.status(400).json('Please add all fields')

		const userExists = await User.findOne({ email: email })
		if (userExists) return res.status(400).json('User already exists')

		const salt = await bcrypt.genSalt(saltRounds)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = await User.create({
			email,
			name,
			password: hashedPassword,
		})
		res.status(200).json({ success: `New user ${newUser.name} created` })
	} catch (err) {
		res.status(500).json({ msg: 'Something went wrong', eMsg: err.message })
	}
}

export const login = async (req, res) => {
	const { email, password } = req.body

	try {
		if (!email || !password)
			return res.status(400).json('Please add all fields')

		const user = await User.findOne({ email })
		if (!user) return res.status(400).json('Wrong email or password')

		const validPass = await bcrypt.compare(password, user.password)
		if (!validPass) return res.status(400).json('Wrong email or password1')

		res.status(200).json(`${user.name} user logged in`)
	} catch (err) {
		res.status(500).json(err)
	}
}

export const logout = async (req, res) => {}

export const deleteUser = async (req, res) => {}
