const http = require('http');
const port = process.env.PORT || 3000; // Cacher le port
const app = require('./app');

const server = http.createServer(app);

app.get('/', (req, res) => res.send('hello world'))

server.listen(port);

console.log('Server created');
console.log('Listen on port ', port);
