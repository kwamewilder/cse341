const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Emmanuel O Gyasi-Ampomah');
});

module.exports = router;
