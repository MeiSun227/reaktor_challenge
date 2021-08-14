const fetch = require('node-fetch')

const populateRules = (chapters, matchedRules) => {
    chapters.forEach(c => {
        matchedRules.forEach(r => {
            const ruleParts = r.split(' ')
            const numbers = ruleParts[0].split('.')
            const ruleNumber = numbers[0] + '.'
            const contents = ruleParts.slice(1, ruleParts.length).join(' ')
            if (c.id === ruleNumber) {
                c.rules.push({
                    id: ruleParts[0],
                    content: contents
                })
            }
        })
    })
    return chapters
}

const parseChapters = (matches) => {
    const Chapters = []
    matches.forEach((c) => {
        const parts = c.split(' ')
        const contents = parts.slice(1, parts.length).join(' ')
        Chapters.push({
            id: parts[0],
            chapter: contents,
            rules: []
        })
    })
    return Chapters
}

// regex pattern
const GetChapters = async () => {
    // get rules pattern
    const ruleBookResponse = await fetch('https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt')
    const data = await ruleBookResponse.text()
    const gameRules = data.split('Glossary')[1]
    const regEx = /^[0-9]*\.\w.*((\r?\n.+)*)/gm
    const matchedRules = gameRules.match(regEx)

    // get chapter pattern
    const chapterRegex = /^[0-9]{3}\.\s.*/gmi
    const matchedChapters = gameRules.match(chapterRegex)

    const chapters = parseChapters(matchedChapters)
    const chaptersWithRules = populateRules(chapters, matchedRules)
    return chaptersWithRules
}

module.exports = GetChapters