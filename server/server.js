const http = require('http');
const express = require('express');
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json')) // zrupp db.dżejson
 
const app = express();
const port = 3001;
 
app.get('/', (req, res)=>{
  res.send("hellowrold"); // głupi jesteś json serwerem se puzyniej użyj ęż?
});

 
app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});