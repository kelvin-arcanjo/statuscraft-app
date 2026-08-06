const http = require('http')
const fs = require('fs')
const { exec } = require('child_process'); // Importa o exec do child_process;

const server = http.createServer((req  , res) => {
    // Rota para processar requisições POST do formulário;
    if (req.method === 'POST' && req.url === '/processar') {
        let body = '';

        req.on('data' , (chunk) => {
            body += chunk
        })

        req.on('end' , () => {
            const dados = JSON.parse(body)

            let duracao = 5

            if (dados.destino === 'whatsapp') {
                duracao = 30

            } else if (dados.destino === 'instagram') {
                duracao = 60

            } else if (dados.destino === 'facebook') {
                duracao = 120
            }

            //Construção do nome de saída único com Date.now();
            const nomeSaida = `videos/saida-${Date.now()}.mp4`

            //Comando FFmpeg fixo no ficheiro de teste simulado;
            const comando = `ffmpeg -i videos/teste.mp4 -t ${duracao} ${nomeSaida}`

            //Executa o comando no sistema...

            exec(comando ,  (err , stdout , stderr) => {
                if (err) {
                    console.error('Erro ao processar vídeo:' , err)
                    res.statusCode = 500
                    res.end('Erro ao processar o vídeo.')

                    return
                }

                // Resposta de sucesso enviando o nome do novo ficheiro.
                res.end(`Vídeo processado: ${nomeSaida}`)
            })
        })

        return
    }

    //Roteamento de ficheiros estáticos;

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

    //Leitura e entrega dos ficheiros estáticos;

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

