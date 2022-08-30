require('dotenv')
const app = require('./app');

app.listen(process.env.PORT, () => { console.log(`Up and running on a port: ${process.env.PORT || 5000} and host is ${process.env.HOST || 'https://localhost'}`); })