const fs = require('fs')
const httpProxy = require('http-proxy')
const PORT = process.argv[3] || 8081

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 3000
  },
  ssl: {
    key: fs.readFileSync('server.key', 'utf8'),
    cert: fs.readFileSync('server.crt', 'utf8')
  }
}).listen(PORT)
