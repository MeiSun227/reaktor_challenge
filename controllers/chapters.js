const chapterRouter = require('express').Router()
const GetChapters = require('../helpers/ruleHelper')

chapterRouter.get('/', async (request, response) => {
    const chapters = await GetChapters()
    const chapterTitles = chapters.map(c => {
        return {
            id: c.id,
            chapter: c.chapter
        }
    })
    response.json(chapterTitles)
})

chapterRouter.get('/:id', async (request, response) => {
    console.log('Get rules')
    const id = request.params.id + '.'
    const chapters = await GetChapters()
    const chapter = chapters.filter(c => c.id === id)
    response.json(chapter[0])
})

chapterRouter.post('/search', async (request, response) => {
    const search = request.query.term
    const chapters = await GetChapters()
    const rulesArr = []
    chapters.forEach(c => { c.rules.forEach(r => rulesArr.push(r)) })
    const searchRules = rulesArr.filter(r => r.content.toUpperCase().includes(search.toUpperCase()))
    const searchResult = searchRules.map(r => {
        return {
            id: r.id,
            content: r.content
        }
    })
    response.json(searchResult)
})

module.exports = chapterRouter
