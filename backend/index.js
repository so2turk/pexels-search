import express, { application } from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 5005
app.listen(port, () => console.log(`Listening on port ${port}`))
