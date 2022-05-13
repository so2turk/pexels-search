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
	.get('/images/:id', getImage)
	.post('/vids', getVids)
	.get('/vids/:id', getVid)

export default pexelsRouter
