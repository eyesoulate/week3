const express = require('express')
const app = express()
const port = 2020

app.get('/', (req,res) => res.send(`hello there!`))
app.get('/index', (req, res) => res.sendFile('index.html', {root:__dirname}))
app.get('/data', (req, res) => res.json({ fruit: 'grapes', amount: 30}))
app.listen(port, () => console.log(`Example port on ${port}`))
