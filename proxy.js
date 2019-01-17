const fs = require('fs')
const httpProxy = require('http-proxy')
const FROM = process.argv[3] || 8081
const TO = process.argv[4] || 3000

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: TO
  },
  ssl: {
    key: fs.readFileSync('server.key', 'utf8'),
    cert: fs.readFileSync('server.crt', 'utf8')
  }
}).listen(FROM)

console.log(`Forwarding HTTPS from ${FROM} to ${TO}`)
