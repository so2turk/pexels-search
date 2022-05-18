import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.css'
import VidCard from './components/card/vid-card'
import Spinner from './components/spinner/spinner'

function App() {
	const [videos, setVideos] = useState([])
	const [totalVids, setTotalVids] = useState(0)
	const [loading, setLoading] = useState(false)
	let page = 1

	useEffect(() => {
		if (!videos.length > 0) getVideos()

		window.addEventListener('scroll', handleScroll)
		// eslint-disable-next-line
	}, [])

	const getVideos = async () => {
		try {
			const result = await axios.get('/api/pexels/vids', { page })

			if (page > 1) {
				setVideos((videos) => [...videos, ...result.data.videos])
			} else {
				setTotalVids(result.data.total_results)
				setVideos(result.data.videos)
			}
		} catch (err) {
			console.log(err)
		}
		setLoading(false)
	}

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight
		) {
			setLoading(true)
			page += 1
			getVideos()
		}
	}

	return (
		<div className="app">
			{videos.length > 0 && (
				<div className="total-vids">Totol Videos: {totalVids}</div>
			)}
			<div className="cards">
				{videos.length > 0 ? (
					videos.map((video, i) => {
						return (
							<div className="cardContainer" key={`${video.id} + ${i}`}>
								<VidCard video={video} />
							</div>
						)
					})
				) : (
					<Spinner />
				)}
			</div>
			{loading && <Spinner />}
		</div>
	)
}

export default App
