const express = require('express');
const app = express();
const port = 3001;

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});

