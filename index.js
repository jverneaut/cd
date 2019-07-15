const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    hello: 'World'
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

