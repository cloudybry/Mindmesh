const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('🧠 Connected:', socket.id);

  socket.on('thought fragment', data => {
    data.id = socket.id; // attach sender ID
    io.emit('thought fragment', data);
  });
});

server.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});