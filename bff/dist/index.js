const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

// Exemple d'endpoint API exposé via /api/*
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Bonjour depuis le BFF' });
});

// Healthcheck simple
app.get('/health', (req, res) => res.send('ok'));

app.listen(port, () => {
  console.log(`BFF listening on ${port}`);
});