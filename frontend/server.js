const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Route to get data from backend1
app.get('/api/backend1', async (req, res) => {
  try {
    const response = await axios.get('http://backend1-service:3001/');
    res.send(`Response from Backend 1: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error fetching from Backend 1');
  }
});

// Route to get data from backend2
app.get('/api/backend2', async (req, res) => {
  try {
    const response = await axios.get('http://backend2-service:3002/');
    res.send(`Response from Backend 2: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error fetching from Backend 2');
  }
});

// Default route
app.get('/', (req, res) => {
  res.send(`
    <h1>Frontend Service</h1>
    <ul>
      <li><a href="/api/backend1">Call Backend 1</a></li>
      <li><a href="/api/backend2">Call Backend 2</a></li>
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});

