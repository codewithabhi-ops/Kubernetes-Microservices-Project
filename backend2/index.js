const express = require('express');
const app = express();
const port = 3002;

app.get('/api/products', (req, res) => {
  res.json([
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' }
  ]);
});

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});

