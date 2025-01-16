let {createServer} = require('http')

const server = createServer((request, response) => {

    response.writeHead(200, {'content-type': 'text/html'})

    response.write(`
        <h1>Hello World</h1>
        <p>Primeira página com node</p>
        `)
    response.end()
})

server.listen(8000);

console.log('Ouvindo a porta 8000')