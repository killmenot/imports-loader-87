'use strict';

const path = require('path');
const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.render('pages/index');
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.render('pages/error', err);
});

module.exports = app;


return ;