import { Link } from 'react-router-dom'
import './nav.css'

const Nav = ({ user }) => {
	return (
		<div className="nav-body">
			<div className="nav">
				<Link to="/">
					<img className="logo-img" src="/Logo.svg" alt="logo" />
				</Link>
				<div className="wrap">
					<form className="search">
						<input
							type="text"
							className="input-field"
							placeholder="Search videos..."
						/>
						<button type="submit" className="bSubmit button">
							Search
						</button>
					</form>
				</div>
				{user ? (
					<div className="avatar-field">
						<button className="bLogout button">Logout</button>
					</div>
				) : (
					<>
						<div className="log-res">
							<Link to="/login">
								<button className="bLogin button">Login</button>
							</Link>
							<Link to="/register">
								<button className="bRegister button">Register</button>
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Nav
