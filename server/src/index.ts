const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const PORT = 1234;
const server = http.createServer(app).listen(
  PORT,
  (): void => {
    console.log(`✓ http listening on ${PORT}`);
  }
);

const io = socketio(server);

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

io.on('connection', (socket: Socket) => {
  console.log('♰ user connected ♰');
  socket.on('message', (msg: string) => {
    console.log('message log # ', msg);
    io.emit('message', msg);
  });
});
