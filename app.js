const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

const home = '/index.html'


app.use(express.static('./public'))

app.get('/', cors(), (req, res) => res.sendFile(path.join(__dirname + home)));

app.post('/search/:request', cors(), (req, res) => {
	res.send('success!!');
});

app.listen(port, () => console.log('Example app listening on port ${port}!'));
