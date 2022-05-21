import VideosPage from './pages/videos-page/videos-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import VideoPage from './pages/video-page/video-page'
import Register from './pages/register/register'
import Login from './pages/login/login'

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<VideosPage />} />
					<Route path="/video/:id" element={<VideoPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
