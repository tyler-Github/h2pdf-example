const express = require('express');
const app = express();
const h2pdf = require('h2pdf');

app.get('/pdf', async (req, res) => {
  const html = '<h1>Hello, World!</h1>';
  const pdf = await h2pdf(html);
  res.contentType('application/pdf');
  res.send(pdf);
});

app.listen(3000, () => console.log('Server started on port 3000'));
