
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'horus\'s intentionally vulnerable API!',
    })
  });

app.get('/any/path', (req, res) => {
    let url = req.param('url');
    if (url) {
        res.redirect(url);
    }
});

app.get('/healthcheck', (req, res) => {
    res.status(200).send('WORKING')
  });

  const PORT = 8888;
  
  app.listen(PORT, () => {
    console.log(`horus intentionally vulnerable test API is running on port: ${PORT}`)
  });
