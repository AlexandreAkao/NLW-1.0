import express from 'express';

const app = express();

app.get('/users', (req, res) => {

  res.json([
    'Alexandre',
    'Karime',
    'Ori',
    'Luna',
    'Akamaru'
  ])
});

app.listen(3333);