var socket = io();

$('form').submit(function (e) {
  e.preventDefault(); // prevents page reloading
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('message', (msg) => {
  console.log(msg);
});

socket.on('chat message', function (msg) {
  $('#messages').append($('<li>').text(msg));
});
