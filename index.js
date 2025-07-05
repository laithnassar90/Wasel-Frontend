// Load dependencies
const express = require('express');
const cors = require('cors');

// Create Express app
const app = express();

// Enable CORS for all origins (you can customize if needed)
app.use(cors());

// Parse incoming JSON requests automatically
app.use(express.json());

// Health check / test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Wasel backend 🚀' });
});

// Global 404 handler (optional but recommended)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Wasel backend running on port ${PORT}`);
});
