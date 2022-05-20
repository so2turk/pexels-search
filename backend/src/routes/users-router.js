import express from 'express'
import {
	createUser,
	deleteUser,
	login,
	logout,
} from '../controllers/users-controller.js'
const usersRouter = express.Router()

usersRouter
	.post('/register', createUser)
	.post('/login', login)
	.post('/logout', logout)
	.delete('/delete/:userId', deleteUser)

export default usersRouter
