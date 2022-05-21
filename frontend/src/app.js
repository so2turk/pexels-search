import VideosPage from './pages/videos-page/videos-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import VideoPage from './pages/video-page/video-page'
import Register from './pages/register/register'
import Login from './pages/login/login'
import { useState } from 'react'
import Nav from './components/nav/nav'

function App() {
	const [user, setUser] = useState()

	return (
		<Router>
			<div className="app">
				<Nav user={user} />
				<Routes>
					<Route path="/" element={<VideosPage />} />
					<Route path="/video/:id" element={<VideoPage />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/login"
						element={<Login user={user} setUser={setUser} />}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
