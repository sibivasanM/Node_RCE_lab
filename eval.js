const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  const name = req.query.name;
  const uppercaseName = eval('"' + name + '"' + '.toUpperCase()');
  res.send('Hi there, ' + uppercaseName);
});
app.listen(3000)
