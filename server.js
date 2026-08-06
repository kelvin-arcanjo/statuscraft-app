const http = require('http')
const fs = require('fs')

const server = http.createServer((req  , res) => {
    // 1. Rota para processar requisições POST do formulário;
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

    // 2. Roteamento de ficheiros estáticos;

    let filePath = '' ;

    switch (req.url) {
        case '/':
            filePath = 'index.html'
            break

        case '/estilos.css':
            filePath = 'estilos.css'
            break

        case '/script.js':
            filePath = 'script.js'
            break

        default:
            //Caso tente aceder uma rota não configurada...
            res.statusCode = 404
            res.end('Página não encontrada!')

            return
    }

    // 3. Leitura e entrega dos ficheiros estáticos;

    fs.readFile(filePath , (err , data) => {
        if (err) {
            res.statusCode = 500
            res.end('Erro interno ao ler o ficheiro.')

            return
        }
        
        res.end(data)
    })
})

server.listen(3000 , () => {
    console.log('Servidor a correr em http://localhost:3000')
})

