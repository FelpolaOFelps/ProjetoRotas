const express = require('express');
const router = require('./routes/index');
const mustache = require('mustache-express');

const app = express();

app.use('/', router);
app.use(express.json());

app.engine('mst', mustache(__dirname + '/views/partials','.mst'));

app.set('views', __dirname + '/views', '.mst');

module.exports = app;