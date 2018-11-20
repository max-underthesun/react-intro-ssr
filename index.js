const express = require('express');
require('@babel/register');
require('@babel/polyfill');
const render = require('./render').default;
const app = express();

const publicDir = require('path').join(__dirname, '/static');
// console.log(publicDir);
app.use(express.static(publicDir));
// app.use(express.static('static/images'));

app.get('/', async (req, res) => {
  const response = `
    <!doctype html>
    <html>
      <head>
        <title>React, Hello</title>
      </head>
      <body>
        <div id="root">${await render()}</div>
      </body>
    </html>
  `;
  res.send(response);
});
app.listen(3001, () => console.log('Server is listening on 3001'));
