const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('Olá, Mundo')
  })

  // lista de personagem

  const lista = ['Rick sanchez','Morty Smith','Summer Smith']

  // Read all -> get /intem
app.get('/item',function(req, res){
  res.send(lista)
})

app.listen(3000)