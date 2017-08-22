const http = require('http')
const hostname = '172.19.42.3'
const port = 80
const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('你好，世界！\n')
})
server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
})