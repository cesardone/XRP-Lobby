import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import { Card } from 'reactstrap';
import queryString from 'querystring';

let socket;
let name;

export default (props) => {
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    if (!props.location.name) console.log('Login First!');
    else {
      name = props.location.name.name + '$xspring.money';
      console.log(name);
      socket.emit('login', { name }, (userInfo) => {
        alert(userInfo.name);
      });
    }
  });

  return (
    <Card>
      <h1>Lobby</h1>
    </Card>
  );
};
