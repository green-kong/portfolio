const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../style')));
app.use(express.static(path.join(__dirname, '../js')));
app.use(express.static(path.join(__dirname, '../data')));
app.use(express.static(path.join(__dirname, '../assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);
