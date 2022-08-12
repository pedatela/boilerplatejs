require('dotenv')
const app = require('./app');

app.listen(process.env.PORT, () => { console.log(`Up and running on a port: ${process.env.PORT} and host is ${process.env.HOST}`); })