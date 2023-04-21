const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Emmanuel O Gyasi-Ampomah');
});

module.exports = routes;