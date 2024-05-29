const express = require('express')

const app = express()
const eta = require('eta');

app.use(express.json());
app.engine('eta', eta.renderFile);
app.set('view engine', 'eta');

app.set('views', './views');

app.post('/user/update', function (req, res) {
const userConfig = req.body;

res.render('index.eta', {settings: userConfig});
})

app.listen(3000, function () {
console.log('listening for requests on http://localhost:3000')
})
