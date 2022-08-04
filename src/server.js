const app = require('./app');
const PORT = 5000
const HOST = 'localhost'

app.listen(PORT, () => { console.log(`Up and running on a port: ${PORT} and host is ${HOST}`); })