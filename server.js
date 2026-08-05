const http = require('http')
const fs = require('fs')

const server = http.createServer((req  , res) => {
    if (req.method === 'POST' && req.url === '/processar') {
        let body = '';

        req.on('data' , (chunk) => {
            body += chunk
        })

        req.on('end' , () => {
            const dados = JSON.parse(body)
            console.log('Dados recebidos:' , dados)
            res.end('Recebido com sucesso!')
        })

        return
    }

    let filePath = '' ;

    if (req.url === '/') {
        filePath = 'index.html'

    } else if (req.url === '/estilos.css') {
        filePath = 'estilos.css'

    } else if (req.url === '/script.js') {
        filePath = 'script.js'
    }

    fs.readFile(filePath , (err , data) => {
        res.end(data)
    })
})

server.listen(3000 , () => {
    console.log('Servidor a correr em http://localhost:3000')
})

