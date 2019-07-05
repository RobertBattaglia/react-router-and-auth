const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname, '..', 'client', 'dist', 'bundle.js'),
    err => {
      if (err) {
        res.status(500).send(err);
      }
    };
});

app.get('/*', function(req, res) {
  res.sendFile(
    path.join(__dirname, '..', 'client', 'dist', 'index.html'),
    err => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Listening on port ${port}`);
  }
});
