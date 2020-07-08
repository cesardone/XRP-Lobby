## XRP Live Room Demo
An XRP Socket.io live application!

## What is this?
I created this project during my Fullstack Academy WDF Cohort for my Stack-A-Thon project.
Personally I'm very interested in developing within blockchain and so I decided to take a stab at implementing a
blockchain SDK with a Socket.io app.

## What does it do?
* When a user logs in they enter a live room where they are able to see other users also logged in.
* A XRP wallet is created at random for them and is funded with 300 XRP (don't ask where it's from...)
* When there are multiple users inside the lobby, either user can send XRP to each other.
* Upon sending, everyone that is logged in refreshes their current XRP amount
* This app uses Xpring SDK and connect itself to the XRP Ledger Blockchain. All of the transactions are done using its TestNet Ledger.

## Why did I do this?
I think blockchain development is the future of how we move data around and I find that the use cases for it is far greater than just cryptocurrency.
XRP in specific has potential to be a great token for the future of the internet of value. When I came across this SDK and noticed how simple it has become to utilize this blockchain gives me hope that companies are working towards making it easier for developers to create blockchain enabled applications.

## What technologies are being used?
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Xpring SDK](https://xpring.io/)
* [React](https://reactjs.org/)
* [Socket.io](https://socket.io/)
* [Reactstrap](https://reactstrap.github.io/)
* [React Router](https://reacttraining.com/react-router/)

## Here's the app in action!
#### Logging in as a user:
![Logging in as a user](https://github.com/cesardone/XRP-Lobby/blob/master/GIFS/Logging%20in.gif)
#### Logged in user:
![Logged in user](https://github.com/cesardone/XRP-Lobby/blob/master/GIFS/logged%20in.gif)
#### Sending XRP to a user:
![Sending XRP to a user](https://github.com/cesardone/XRP-Lobby/blob/master/GIFS/Sending.gif)
#### Transaction Hash:
![Transaction Hash](https://github.com/cesardone/XRP-Lobby/blob/master/GIFS/Testnet.gif)
#### More than 1 user:
![More than 1 user](https://github.com/cesardone/XRP-Lobby/blob/master/GIFS/3rd%20User.gif)



Big Thanks for checking out this application and I look forward to working on more future projects!
