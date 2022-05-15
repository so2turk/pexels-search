import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.css'

function App() {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		getVideos()

		// eslint-disable-next-line
	}, [])

	const getVideos = async () => {
		try {
			const result = await axios.get('/pexels/vids')
			setVideos(result.data.videos)
		} catch (err) {
			console.log(err)
		}
	}
	console.log(videos)

	return <div className="App">lol</div>
}

export default App
