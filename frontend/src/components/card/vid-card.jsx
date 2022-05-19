import './vid-card.css'
const VidCard = ({ video }) => {
	return (
		<div className="card">
			<div className="card-detail">
				<div className="vid-detail">
					<img
						className="vid-img"
						src={video.video_pictures[10].picture}
						alt="video"
					/>
				</div>
			</div>
		</div>
	)
}

export default VidCard
