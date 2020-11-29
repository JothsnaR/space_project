import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './src/app';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));
app.get('*', (req, res) => {
    const content = renderToString(
        // contet for redirects and error handling
        <StaticRouter location={req.path} context={{}} >
            <App />
        </StaticRouter>
    );
    
    const html = `
    <html>
        <head>
            <link rel="stylesheet" href="main.css" type="text/css" />
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>    `
    
  
    res.send(html);
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
