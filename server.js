import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend build files:
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Backend API example:
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all: serve index.html so frontend handles client-side routes:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




 