const http = require('http');
const express = require('express');
 
const app = express();
const port = 3001;
 
app.get('/', (req, res)=>{
  res.send("hellowrold");
});

 
app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});