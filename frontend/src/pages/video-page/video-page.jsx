import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/spinner/spinner'
import './video-page.css'

const VideoPage = () => {
	const [video, setVideo] = useState()
	const { id } = useParams()

	useEffect(() => {
		const getVideo = async () => {
			try {
				const result = await axios.get(`/api/pexels/vid/${id}`)
				setVideo(result.data)
			} catch (err) {
				console.error(err)
			}
		}

		getVideo()

		// eslint-disable-next-line
	}, [id])

	if (!video) return <Spinner />

	return (
		<div className="vid-page">
			<div className="main">
				<div className="vid">
					<video controls src={video.video_files[0].link}>
						broken video.. please try it again later..
					</video>
				</div>
			</div>
		</div>
	)
}

export default VideoPage
