const express = require('express')
const app = express()
const port = process.env.PORT || 2020

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req,res) => res.send(`hello there!`))
app.get('/index', (req, res) => res.sendFile('index.html', {root:__dirname}))
app.get('/data', (req, res) => res.json({ fruit: 'grapes', amount: 30}))
app.listen(port, () => console.log(`Example port on ${port}`))
