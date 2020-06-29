const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router = require('./router');
const { addUser, removeUser, allUsers } = require('./users');
const { getBalance, generateNFund, sendXRP } = require('../xrp/xrp.js');

// PORT
const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('We have a new connection!');

  // Add to active users when a user is logged on
  socket.on('login', async ({ name }, sendUsers) => {
    const walletInfo = await generateNFund();
    addUser({ id: socket.id, name, walletInfo });

    // Broadcast updated user list when a new user logs in
    io.emit('new user', allUsers());

    // Send active users upon log in
    sendUsers(allUsers());
  });

  socket.on('send', async ({ amount, sendingWallet, recievingAddress }) => {
    // Send XRP to User
    const hash = await sendXRP(amount, sendingWallet, recievingAddress);
    console.log(hash);

    io.emit('wallet');
  });

  socket.on('updated wallets', async ({ accData }, balance) => {
    const bal = await getBalance(accData.walletAddress);
    console.log(bal);
    balance(bal);
  });

  socket.on('disconnect', () => {
    // Update active users list upon disconnect
    removeUser(socket.id);
    io.emit('new user', allUsers());
    console.log('User has left');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`listening on ${PORT} `);
});
