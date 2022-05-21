import express from 'express'
import {
	getImage,
	getImages,
	getVid,
	getVids,
} from '../controllers/pexels-controller.js'

const pexelsRouter = express.Router()

pexelsRouter
	.post('/images', getImages)
	.get('/image/:id', getImage)
	.post('/vids', getVids)
	.get('/vid/:id', getVid)

export default pexelsRouter
