import './vid-card.css'
const VidCard = ({ video }) => {
	return (
		<div className="card">
			<div className="card-detail">
				<div className="vid-detail">
					<video
						className="vid"
						width="300"
						controls
						src={video.video_files[0].link}
						alt="video"
					/>
				</div>
			</div>
		</div>
	)
}

export default VidCard
