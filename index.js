const express = require('express')
const data = require('./MOCK_DATA.json')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
    res.send(data)
  })
app.get('/', (req, res) => {
  res.send("Welcome to Home page")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})