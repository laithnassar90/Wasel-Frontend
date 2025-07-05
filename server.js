const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Test API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Wasel backend' });
});

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Try changing the port or killing the process using it.`);
  } else {
    console.error('Server error:', err);
  }
});
