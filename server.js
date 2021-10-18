// server.js
const nr = require('newrelic');
const express = require('express');
const winston = require('winston');
const newrelicFormatter = require('@newrelic/winston-enricher');
const app = express();
const port = 4000;
var counter = 0;

const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.label({myTestLabel: 'test123'}),
        newrelicFormatter()
    )
};
const logger = winston.createLogger(logConfiguration);

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

// Set up home route
app.get('/', (req, res) => {
  message = "You've visited the home page.  Your random number is " + between(10,100).toString()
  res.send(message);
  logger.info(message);

});
// Set up second page
app.get('/second', (req, res) => {
    message = "You've visited the second page.  Your random number is " + between(10,100).toString()
    res.send(message);
    logger.info(message);
});

app.listen(port, () => {
  logger.info(`Success! Your app is running on on port ${port}.`);
});

