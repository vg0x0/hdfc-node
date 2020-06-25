const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Demo for HDFC Bank!");
});
 
module.exports.app = app;
