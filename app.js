const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const views = require('./apis/views');

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/views', views);

module.exports = app;
