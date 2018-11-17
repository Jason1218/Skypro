const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const home = '/index.html'


app.use(express.static('./public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + home)));

app.get('/:location', (req, res) => {
	search_term = req.params.location;
	console.log(search_term);
});

app.listen(port, () => console.log('Example app listening on port ${port}!'));
