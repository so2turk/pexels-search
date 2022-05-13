import 'dotenv/config'
import express, { application } from 'express'
import pexelsRouter from './routes/pexels-router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/pexels', pexelsRouter)

const port = process.env.PORT || 5005
app.listen(port, () => console.log(`Listening on port ${port}`))
