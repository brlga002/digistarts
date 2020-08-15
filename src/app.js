const express = require('express');
const app = express();

const { errors } = require('celebrate');
const cors = require('cors');

const mathRouter = require('./routes/mathRouter');

app.use(cors());
app.use(express.json());
app.use(mathRouter);
app.use(errors());

module.exports = app;
