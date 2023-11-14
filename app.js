const express = require('express');
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

const home = require('./routes/home')
app.use('/', home); // use => 미들 웨어 등록 메서드

module.exports = app;