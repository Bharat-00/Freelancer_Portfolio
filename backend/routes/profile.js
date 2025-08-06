const express = require('express');
const router = express.Router();
const profiles = require('../data/profiles');

// GET all or filtered profiles
router.get('/', (req, res) => {
  const { search = '', category = 'All' } = req.query;
  const searchLower = search.toLowerCase();

  const filtered = profiles.filter(profile => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchLower) ||
      profile.category.toLowerCase().includes(searchLower);
    const matchesCategory = category === 'All' || profile.category === category;

    return matchesSearch && matchesCategory;
  });

  res.json(filtered);
});

// GET single profile by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile = profiles.find(p => p.id === id);

  if (!profile) {
    return res.status(404).json({ message: 'Profile not found' });
  }

  res.json(profile);
});

module.exports = router;
