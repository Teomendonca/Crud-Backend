const { application, json } = require('express');
const http = require('http');
const express = require('express');
const app = express();

// const hostname = 'localhost';
// const port = 3000;
const produtos = [];
const { randomUUID } = require('crypto');

//GET
app.get("/produto", (request, response) => {
    return response.json(produtos);
})
//POST
app.post("/produto", (request, response) => {
    const { descricao, valor } = request.body;
    const prod = {
        descricao,
        valor,
        id: randomUUID()
    }
    produtos.push(prod);
    return response.json(prod);
})

// sem express
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');

//     if(req.url == "/produto"){
//         res.end(JSON.stringify({mensagem: "url de produto"}));
//     }
//     else
//         res.end(JSON.stringify({Mensagem: "Test"}));

// });

//com express
app.get("/produto", (request, response) => {
    return response.json({ mensagem: "teste" });
})
//analisar dados enviados
app.use(express.json());

app.listen(3001, () => console.log('server running on port 3001'));



// server.listen(port, hostname, ()=>{
//     console.log('Server running at http://${hostname}:${port}/')
// })
