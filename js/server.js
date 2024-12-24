const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Path to the visitors.json file
const VISITORS_FILE = path.join(__dirname, '.db', 'visitors.json');

// Middleware to parse JSON
app.use(express.json());

// Ensure the .db directory and visitors.json file exist
if (!fs.existsSync(path.join(__dirname, '.db'))) {
  fs.mkdirSync(path.join(__dirname, '.db'));
}
if (!fs.existsSync(VISITORS_FILE)) {
  fs.writeFileSync(VISITORS_FILE, JSON.stringify({ total: 0 }));
}

// Route to get the total views
app.get('/total-views', (req, res) => {
  const data = JSON.parse(fs.readFileSync(VISITORS_FILE, 'utf-8'));
  res.json({ total: data.total });
});

// Route to increment total views
app.post('/track-visitor', (req, res) => {
  const data = JSON.parse(fs.readFileSync(VISITORS_FILE, 'utf-8'));
  data.total += 1;
  fs.writeFileSync(VISITORS_FILE, JSON.stringify(data));
  res.json({ total: data.total });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
