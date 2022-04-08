const { io } = require('./app.js');

io.on('connection', function (socket) {
  socket.on('chat', (msg) => {
    console.log(msg);
  });
});
