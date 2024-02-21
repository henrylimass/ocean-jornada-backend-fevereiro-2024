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

//Sinalizamos que o corpo da requisição está em JSON
  app.use(express.json())

//create -> [Post] /item
  app.post('/item', function(req,res){
    //Extraimos o corpo da requisição
    const body = req.body
    
    //Pegamos o nome (String) que foi enviado dentro do corpo
    const item = body.nome
    
    //Coloca o nome dentro da lista de itens
    lista.push(item)
    
    //Enviando uma resposta de sucesso
    res.send("item enviado com sucesso")
  })

app.listen(3000)