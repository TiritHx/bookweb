const jsonServer = require('json-server');  // "server": "json-server --watch ./server/db.json --port 3001"
const path = require('path'); // npm install npm-run-all
const server = jsonServer.create();  
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();  
   
const port = 3001; // na 3000 chodzi react i nie wiem jak to zmienić ¯\_(ツ)_/¯
server.use(middlewares);  
server.use(router);  
server.listen(port, () => {  
  console.log(`JSON Server is running at ${port} port`);
});