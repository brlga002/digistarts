const app = require('./app');

const port = process.env.PORT || 3000;
const urlServe = process.env.URL_SERVE || 'http://localhost';

app.listen(port);
console.log(`API Server listen: ${urlServe}:${port}`);
