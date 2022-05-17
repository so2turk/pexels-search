import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.css'
import VidCard from './components/card/vid-card'

function App() {
	const [videos, setVideos] = useState([])
	const [totalVids, setTotalVids] = useState(0)

	useEffect(() => {
		getVideos()

		// eslint-disable-next-line
	}, [])

	const getVideos = async () => {
		try {
			const result = await axios.get('/pexels/vids')
			setTotalVids(result.data.total_results)
			setVideos(result.data.videos)
		} catch (err) {
			console.log(err)
		}
	}
	console.log(videos)

	return (
		<div className="app">
			{videos.length > 0 && (
				<div className="total-vids">Totol Videos: {totalVids}</div>
			)}
			<div className="cards">
				{videos.length > 0 &&
					videos.map((video, i) => {
						return (
							<div className="cardContainer" key={`${video.id} + ${i}`}>
								<VidCard video={video} />
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default App