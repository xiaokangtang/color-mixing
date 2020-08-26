import express from 'express';

require('dotenv').config();

const server = express();
const port = process.env.PORT;

server.use(express.static('dist'));

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
});

server.listen(port, () => console.log('Server is running...'));