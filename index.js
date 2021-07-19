
const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

// regex pattern
const readRules = () => {
  // get rules pattern
  const data = fs.readFileSync('gameRules.txt', 'utf8')
  const gameRules = data.split('Glossary')[1]
  const regEx = /^[0-9]*\.*[0-9]\.s*.*[\n\r].*/gm
  const found = gameRules.match(regEx)

  // get chapter pattern
  const chapterRegex = /^[0-9]*\.\s.*/gm
  const foundChapters = gameRules.match(chapterRegex)

  const Chapters = []
  foundChapters.forEach((c) => {
    const parts = c.split(' ')
    const contents = parts.slice(1, parts.length).join(' ')
    Chapters.push({
      id: parts[0],
      content: contents,
      rules: []
    })
  })

  foundChapters.forEach(c => {
    const chapterParts = c.split('.')
    found.forEach(r => {
      const ruleParts = r.split(' ')
      const numbers = ruleParts[0].split('.')
      const contents = ruleParts.slice(1, ruleParts.length).join(' ')
      if (chapterParts[0] === numbers[0]) {
        const matchingChapter = Chapters.find((c) => c.id === (numbers[0] + '.'))
        matchingChapter.rules.push({
          id: ruleParts[0],
          content: contents
        })
      }
    })
  })
  return Chapters
}

// app.get('/api/chapter', (request, response) => {
//   const getChapter = readContents()
//   response.json(getChapter)
// })

app.get('/api/rules', (request, response) => {
  const getRules = readRules()
  response.json(getRules)
})

const PORT = 3002
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
