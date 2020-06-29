/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

export default () => {
  return (
    <div className='footer'>
      <footer>
        <h6>
          Made with the following technologies:{' '}
          <a href='https://nodejs.org/en/' target='_blank'>
            {' '}
            Node.js{' '}
          </a>{' '}
          |{' '}
          <a href='https://expressjs.com/' target='_blank'>
            {' '}
            Express
          </a>{' '}
          |{' '}
          <a href='https://xpring.io/' target='_blank'>
            Xpring SDK{' '}
          </a>
          |{' '}
          <a href='https://reactjs.org/' target='_blank'>
            React
          </a>{' '}
          |{' '}
          <a href='https://socket.io/' target='_blank'>
            {' '}
            Socket.io
          </a>{' '}
          |{' '}
          <a href='https://reactstrap.github.io/' target='_blank'>
            Reactstrap
          </a>{' '}
          |
          <a href='https://reacttraining.com/react-router/' target='_blank'>
            {' '}
            React Router
          </a>
        </h6>
      </footer>
    </div>
  );
};
