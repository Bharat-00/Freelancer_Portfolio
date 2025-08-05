const express = require('express');
const router = express.Router();
const profiles = require('../data/profiles');

router.get('/', (req, res) => {
  res.json(profiles);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile = profiles.find(p => p.id === id);
  if (!profile) {
    return res.status(404).json({ message: 'Profile not found' });
  }
  res.json(profile);
});

module.exports = router;
