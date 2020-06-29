import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default () => {
  return (
    <div className='jumbo'>
      <Jumbotron>
        <Container fluid>
          <h1 className='display-3'>What is XRP?</h1>
          <p className='lead'>
            XRP is a digital asset built for payments. It is the native digital
            asset on the XRP Ledger—an open-source, permissionless and
            decentralized blockchain technology that can settle transactions in
            3-5 seconds. XRP can be sent directly without needing a central
            intermediary, making it a convenient instrument in bridging two
            different currencies quickly and efficiently.
          </p>
          <p>
            <a href='https://ripple.com/xrp/' target='_blank'>
              {' '}
              Learn More{' '}
            </a>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};
