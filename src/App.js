import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Lobby from './components/Lobby';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Lobby} />
      </Switch>
    </div>
  );
}

export default App;
