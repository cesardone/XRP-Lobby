import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import {
  Card,
  CardBody,
  Input,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardSubtitle,
  FormGroup,
} from 'reactstrap';

let socket;
let name;
let sendXRP = {};
const ENDPOINT = 'localhost:5000';
socket = io(ENDPOINT);

export default (props) => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [accData, setAccData] = useState({});

  // Update page for the 1st time
  useEffect(() => {
    // Check if user is logged in
    if (!props.location.name) alert('Login First!');
    // Prevent infite page load
    else if (activeUsers.length === 0) {
      login();
    }

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  });

  // Update state when new user logs in
  useEffect(() => {
    socket.on('new user', (newUser) => {
      setActiveUsers(newUser);
    });
  });

  // Log the Curr User into the socket
  const login = async () => {
    // Make connection with backend
    name = props.location.name.name + '$xspring.money';
    console.log(name);

    // On Login, set state with all active users
    socket.emit('login', { name }, (data) => {
      const accInfo = data.find((ele) => ele.id === socket.id);
      setActiveUsers(data);
      // console.log('accInfo', accInfo.walletInfo);
      setAccData(accInfo.walletInfo);
    });
  };

  // Handle click on a username
  const handleClick = (userName) => {
    // Prevent User from clicking thier name
    if (userName !== name) {
      toggle();
      const recievingAddy = activeUsers.find((ele) => ele.name === userName);
      // console.log(recievingAddy);
      sendXRP = recievingAddy;
    }
  };

  // Handle send of XRP
  const handleSend = async (evt) => {
    evt.preventDefault();
    if (sendXRP.amount > 0) {
      const amount = sendXRP.amount;
      const sendingWallet = accData.walletData;
      const recievingAddress = sendXRP.walletInfo.walletAddress;
      // Update XRP Wallet when someone sends
      socket.emit('send', { amount, sendingWallet, recievingAddress });

      toggle();
    }
  };

  useEffect(() => {
    socket.on('hey', () => {
      socket.emit('updated wallets', { accData }, (data) => {
        console.log('hello');
        setAccData({ ...accData, balance: data });
      });
    });
  });

  // Update wallet info
  // useEffect(() => {
  //   socket.on('update', () => {
  //
  //   });
  // });

  // Toggles the popup
  const toggle = () => setModal(!modal);

  return (
    <div>
      <h2 className='text-center'>Lobby</h2>
      <Card className='active-users-card'>
        <CardBody>
          <CardTitle>Active Users</CardTitle>
          <ListGroup>
            {/* Displays all active users */}
            {activeUsers.map((usrs) => {
              return (
                <ListGroupItem
                  key={usrs.id}
                  tag='button'
                  onClick={() => {
                    handleClick(usrs.name);
                  }}
                >
                  {' '}
                  {usrs.name}{' '}
                </ListGroupItem>
              );
            })}
          </ListGroup>
          {/* Display users */}

          {/* Modal for handling XRP logic */}
          <div>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                Send XRP to: {sendXRP.name}
              </ModalHeader>
              <ModalBody>How Much would you like to send?</ModalBody>
              <FormGroup>
                <Input
                  placeholder='Amount of XRP'
                  type='number'
                  onChange={(evt) => {
                    sendXRP.amount = evt.target.value;
                  }}
                  onKeyUp={(evt) => {
                    evt.preventDefault();
                  }}
                />
              </FormGroup>

              <ModalFooter>
                <Button
                  color='primary'
                  type='submit'
                  onClick={async (evt) => await handleSend(evt)}
                >
                  Do Something
                </Button>
                <Button onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
          {/* Modal */}
        </CardBody>

        {/* Display user information */}
      </Card>
      <Card className='active-users-card'>
        <CardBody>
          <CardTitle>Your Account Information</CardTitle>
          <CardSubtitle>PayID: {name}</CardSubtitle>
          <CardSubtitle>XRP Address: {accData.walletAddress}</CardSubtitle>
          <CardSubtitle>Your Balance: {accData.balance}</CardSubtitle>
        </CardBody>
      </Card>
      {/* User Info */}
    </div>
  );
};
