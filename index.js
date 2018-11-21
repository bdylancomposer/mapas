const http = require('http'),
  app = require('./config/express');

require('./config/database')('localhost/mapas');

http
  .createServer(app)
  .listen(3000, () => console.log('Server running at localhost:3000'));