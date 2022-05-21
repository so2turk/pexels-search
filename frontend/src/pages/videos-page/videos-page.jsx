import { useEffect, useState } from 'react'
import axios from 'axios'
import VidCard from '../../components/card/vid-card'
import Spinner from '../../components/spinner/spinner'
import './videos-page.css'
import { Link } from 'react-router-dom'

function VideosPage({ query }) {
	const [videos, setVideos] = useState([])
	const [totalVids, setTotalVids] = useState(0)
	const [loading, setLoading] = useState(false)
	let page = 1

	useEffect(() => {
		if (!videos.length > 0) getVideos(query)

		window.addEventListener('scroll', handleScroll)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		getVideos(query)

		// eslint-disable-next-line
	}, [query])

	const getVideos = async (query) => {
		try {
			const result = await axios.post('/api/pexels/vids', { page, query })

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
		<div className="videos-page">
			{videos.length > 0 && (
				<div className="total-vids">Totol Videos: {totalVids}</div>
			)}
			<div className="cards">
				{videos.length > 0 ? (
					videos.map((video, i) => {
						return (
							<div className="cardContainer" key={`${video.id} + ${i}`}>
								<Link to={`/video/${video.id}`}>
									<VidCard video={video} />
								</Link>
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

export default VideosPage
