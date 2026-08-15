require('dotenv').config()

const express = require('express');
const app = express()
const port = 4000

const githubData = {
FullName: "JohnDoe",
Email:"john.doeexample.com",
Phone: "+1202-5550147",
Address:"123,TestStreet",
City: "Testville",
State: "California",
ZIPCode:"90210",
Country: "UnitedStates"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('kanhadotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at kanhadotcom</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Nothing here</h2>')
})

app.get('/address', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})