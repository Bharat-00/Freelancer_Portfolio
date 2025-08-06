require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); // Load .env if used

const profileRoutes = require('./routes/profile');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/profile', profileRoutes);

// Serve static frontend (Vite build)
const __dirnamePath = path.resolve();
app.use(express.static(path.join(__dirnamePath, '../frontend/dist')));

// Handle all other routes - return frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirnamePath, '../frontend/dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
