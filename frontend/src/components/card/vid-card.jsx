const VidCard = ({ video }) => {
	return (
		<div>
			<video controls width="300" src={video.video_files[0].link} alt="video" />
		</div>
	)
}

export default VidCard
