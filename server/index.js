const express = require('express');
const path = require('path');
const app = express();
const client = require('./elasticClient');

// built react app for deploy
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// api
app.get('/api', (req, res) => {
  res.json({message:'Hello Lukas!'});
});

// elastic
app.get('/results', (req, res) => {
  const passedSortOption = req.query.sortOption;
  async function sendESRequest() {
    const body = await client.search({
      index: 'cv-events',
      body: {
        size: 1000,
        query: {
          "match_all": {}
        },
      },
    });
    res.json(body.hits.hits);
  }
  sendESRequest();
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port http://127.0.0.1:${PORT}...`);
});