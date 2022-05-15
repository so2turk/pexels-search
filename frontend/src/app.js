import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.css'
import VidCard from './components/card/vid-card'

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

	return (
		<div className="App">
			{videos.length > 0 &&
				videos.map((video, i) => {
					return (
						<div key={`${video.id} + ${i}`}>
							<VidCard video={video} />
						</div>
					)
				})}
		</div>
	)
}

export default App
