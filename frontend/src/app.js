import VideosPage from './pages/videos-page/videos-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<VideosPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
