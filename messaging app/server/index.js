const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }  // allow all origins for dev
});

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('chat message', (msg) => {
    console.log('Message received:', msg);
    // broadcast message to all clients including sender
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
