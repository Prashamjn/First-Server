const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bootstrap', (req, res) => {
  res.sendFile('bootstrap.html', { root: app.get('views') })
})

app.get('/SowmayJain', (req, res) => {
  res.sendFile('index.html', { root: app.get('views') })
})

app.get('/HI', (req, res) => {
  res.sendFile('hi.html', { root: app.get('views') })
})

app.get('/pro', (req, res) => {
  res.sendFile('project.html', { root: app.get('views') })
})

app.get('/bulb', (req, res) => {
  res.sendFile('bulb.html', { root: app.get('views') })
})

app.get('/AI', (req, res) => {
  res.sendFile('AI.html', { root: app.get('views') })
})

app.get('/audioplayer', (req, res) => {
  res.sendFile('audioplayer.html', { root: app.get('views') })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})