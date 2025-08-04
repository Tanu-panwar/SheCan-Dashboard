import express from 'express';
import cors from 'cors';
import fs from 'fs';
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load data' });

    const parsedData = JSON.parse(data);
    res.json(parsedData.intern);
  });
});

app.get('/api/leaderboard', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load data' });

    const parsedData = JSON.parse(data);
    res.json(parsedData.leaderboard);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
