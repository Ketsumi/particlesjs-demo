'use strict';

const express = require('express');
const app = express();
const path = require('path');

const staticPath = path.resolve(__dirname, './public/');
const indexPath = path.resolve(__dirname, './public/index.html');

app.use(express.json());
app.use(express.static(staticPath));

app.get('*', (req, res) => {
	res.sendFile(indexPath);
});

app.listen(4000, () => console.log('connected on port 4000'));