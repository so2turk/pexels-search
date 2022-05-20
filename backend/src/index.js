import 'dotenv/config'
import express from 'express'
import pexelsRouter from './routes/pexels-router.js'
import usersRouter from './routes/users-router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/pexels', pexelsRouter)
app.use('/api/users', usersRouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
