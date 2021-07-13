
const fs = require('fs')
const express = require('express')
const app = express()

// regex pattern
const readRules = () => {
  try {
    const data = fs.readFileSync('gameRules.txt', 'utf8')
    const gameRules = data.split('Glossary')[1]
    const regEx = /^[0-9]*\.*[0-9]\.h*.*[\n\r].*/gm
    const found = gameRules.match(regEx)
    const rules = []
    found.forEach((f) => {
      const parts = f.split(' ')
      const contents = parts.slice(1, parts.length).join(' ')
      rules.push({
        id: parts[0],
        content: contents
      })
    })
    return rules
  } catch (e) {
    console.log('Error:', e.stack)
  }
}

// menu list
const readContents = () => {
  try {
    const data = fs.readFileSync('gameRules.txt', 'utf8')
    const rules = data.split('Glossary')[0]
    const regEx = /^[0-9]*\.*[0-9]\.h*.*/gm
    const found = rules.match(regEx)
    const chapter = []
    found.forEach((m) => {
      const parts = m.split(' ')
      const ruleChapter = parts.slice(1, parts.length).join(' ')
      chapter.push({
        id: parts[0],
        content: ruleChapter
      })
    })
    return chapter
  } catch (e) {
    console.log('Error:', e.stack)
  }
}

app.get('/api/chapter', (request, response) => {
  const getChapter = readContents()
  response.json(getChapter)
})

app.get('/api/rules', (request, response) => {
  const getRules = readRules()
  response.json(getRules)
})
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
