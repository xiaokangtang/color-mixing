import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
});

server.listen(4242, () => console.log('Server is running...'));