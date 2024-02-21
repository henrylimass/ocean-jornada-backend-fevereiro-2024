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

// Read By ID -> [GET] /item/:id
app.get('/item/:id', function (req, res) {
 
  //Acesso o ID no parametro de rota
  const id = req.params.id
 
  //Acesso na lista baseado noID recebido
  const item = lista[id]
 
  //Envio o item obtido como respodta HTTP
  res.send(item)
})

app.listen(3000)