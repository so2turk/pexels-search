import axios from 'axios'
import { useRef, useState } from 'react'
import './login.css'

const Login = () => {
	const [user, setUser] = useState()
	const [logSuccess, setLogSuccess] = useState(false)
	const [logFailure, setLogFailure] = useState(false)
	const emailRef = useRef()
	const passwordRef = useRef()

	const handleLog = async (e) => {
		e.preventDefault()

		const userToLog = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}

		try {
			const res = await axios.post('/api/users/login', userToLog)
			setUser(res?.data?.user)
			setLogSuccess(true)
			setLogFailure(false)
		} catch (err) {
			console.log(err)
			setLogSuccess(false)
			setLogFailure(true)
		}
	}

	return (
		<div>
			<form onSubmit={handleLog}>
				<input type="email" placeholder="E-mail" ref={emailRef} required />
				<input
					type="password"
					placeholder="Password"
					ref={passwordRef}
					required
				/>
				<button type="submit">Login</button>
			</form>
			<div>
				{logSuccess && (
					<span className="success">{user.name}'s login is successful</span>
				)}
				{logFailure && <span className="failure">Login is failed</span>}
			</div>
		</div>
	)
}

export default Login
