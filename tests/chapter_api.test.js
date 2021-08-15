const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

test('chapters are returned as json', async () => {
  await api
    .get('/api/chapters')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('search returns correct rules', async () => {
  await api
    .get('/api/chapters')
    .expect(200)
  const response = await api
    .post('/api/chapters/search?term=commander')
    .expect(200)
    .expect('Content-Type', /application\/json/)
  const content = response.body
  expect(content).toHaveLength(56)
})
