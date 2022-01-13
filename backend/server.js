const http = require('http')

const app = require('./app')

const port = process.env.PORT || 8080

const Server = http.createServer(app)

Server.listen (port,
console.log(`server running in port number ${port}`)
)