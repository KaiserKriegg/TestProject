const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./api/routes");

require("dotenv").config({
  silent: true,
});

process.env.TZ = process.env.TIMEZONE;

const app = express();

app.use(bodyParser.json({
    limit: '20mb',
    extended: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

const port = 2000;

routes(app);

app.listen(port, function () {
    console.log('mw-meteo: Listening port: ' + port);
});