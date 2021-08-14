const express = require('express')
const app = express()
const cors = require('cors')
const chapterRouter = require('./controllers/chapters')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/chapters', chapterRouter)

module.exports = app