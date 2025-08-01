
const express = require('express');
const router = express.Router();
const profiles = require('../data/profiles');

router.get('/', (req, res) => {
  res.json(profiles);
});

module.exports = router;
