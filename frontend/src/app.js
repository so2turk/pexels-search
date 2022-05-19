import VideosPage from './pages/videos-page/videos-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'
import VideoPage from './pages/video-page/video-page'

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<VideosPage />} />
					<Route path="/video/:id" element={<VideoPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
