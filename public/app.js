const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const home = '/index.html'


app.use(express.static('./public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + home)));

app.post('/myaction', (req, res) => {
	//console.log(req);
});

function searchFunction() {
	alert('This is not finished yet!!');
}

app.listen(port, () => console.log('Example app listening on port ${port}!'));
