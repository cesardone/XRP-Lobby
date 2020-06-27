const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router = require('./router');

// PORT
const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('We have a new connection!');

  socket.on('disconnect', () => {
    console.log('User has left');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`listening on ${PORT} `);
});
