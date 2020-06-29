import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Lobby from './components/Lobby';
import XRP from './components/XRP';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/lobby' component={Lobby} />
        <Route path='/xrp' component={XRP} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
