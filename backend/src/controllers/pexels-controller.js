import axios from 'axios'
const pexelsURL = 'https://api.pexels.com/'

export const getImages = () => {}

export const getImage = () => {}

export const getVids = async (req, res) => {
	const page = req.body.page || 1
	const query = req.body.query || 'trending'
	const perPage = req.body.perPage || 50

	try {
		const result = await axios.get(
			`${pexelsURL}videos/search?page=${page}&per_page=${perPage}&query=${query}`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: process.env.PEXELS_API_KEY,
				},
			}
		)
		res.status(200).json(result.data)
	} catch (err) {
		res.status(500).json({ msg: 'something went wrong', eMsg: err.message })
	}
}

export const getVid = async (req, res) => {
	const id = req.params.id

	try {
		const result = await axios.get(`${pexelsURL}videos/videos/${id}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.PEXELS_API_KEY,
			},
		})
		res.status(200).json(result.data)
	} catch (err) {
		res.status(500).json({ msg: 'something went wrong', eMsg: err.message })
	}
}
