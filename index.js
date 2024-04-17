const express = require('express')
const { randomUUID } = require('crypto')

const porta = "8080"
const app = express()

var produtos = [
    {
        nome: "Ratao",
        valor: 15
    }
]
var users = [
    {
        nome: "Bento",
        Email: "bento@gmail.com"
    }
]


app.use(express.json())
app.get("/", (req, res) => {
    return res.json({ messagem: "Ola  Mundo eu estou Aqui!" })
})

app.get("/produto", (req, res) => {
    return res.json(produtos)
})

app.get("/users", (req, res) => {
    return res.json(users)
})

app.post("/produto",  (req, res) => {
    var { nome, valor } = req.body
    var produto = {
        id: randomUUID(),
        nome: nome,
        valor: valor
    }

    produtos.push(produto)
    return res.json(produto)
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta ${porta}')
})
