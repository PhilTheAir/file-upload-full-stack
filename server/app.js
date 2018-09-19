const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(fileUpload());

app.post('/upload', (req, res) => {
  if (!req.files) return res.status(400).send('No files were uploaded.');

  const sampleFile = req.files.file;
  sampleFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, err => {
    if (err) return res.status(500).send(err);
    res.send('File uploaded!');
  });
});

module.exports = app;
