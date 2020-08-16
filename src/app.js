const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const mathRouter = require('./routes/mathRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use(mathRouter);
app.use(errors());

module.exports = app;
