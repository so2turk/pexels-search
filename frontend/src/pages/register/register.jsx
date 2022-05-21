import axios from 'axios'
import { useRef, useState } from 'react'
import './register.css'

const Register = ({ setShowReg }) => {
	const [regSuccess, setRegSucces] = useState(false)
	const [regFailure, setRegFailure] = useState(false)
	const emailRef = useRef()
	const nameRef = useRef()
	const passwordRef = useRef()

	const handleReg = async (e) => {
		e.preventDefault()

		const userToCreate = {
			email: emailRef.current.value,
			name: nameRef.current.value,
			password: passwordRef.current.value,
		}

		try {
			await axios.post('/api/users/register', userToCreate)
			setRegSucces(true)
			setRegFailure(false)
		} catch (err) {
			console.log(err)
			setRegFailure(true)
			setRegSucces(false)
		}
	}

	return (
		<div className="regContainer">
			<form className="regForm" onSubmit={handleReg}>
				<input
					className="input-field inputReg"
					type="email"
					placeholder="E-mail"
					ref={emailRef}
				/>
				<input
					className="input-field inputReg"
					type="text"
					placeholder="User Name"
					ref={nameRef}
				/>
				<input
					className="input-field inputReg"
					type="password"
					placeholder="Password"
					ref={passwordRef}
				/>
				<button className="bReg button" type="submit">
					Register
				</button>
			</form>
			<div>
				{regSuccess && (
					<span className="success">Registration is successful</span>
				)}
				{regFailure && <span className="failure">Registration is failed</span>}
			</div>
		</div>
	)
}

export default Register
