import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

export default () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color='faded' light>
        {/* Title */}
        <NavbarBrand className='mr-auto'>XRP Lobby</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem>
              <NavLink>
                <Link to='/' onClick={toggleNavbar}>
                  Login
                </Link>
              </NavLink>
              <NavLink>
                <Link to='/lobby' onClick={toggleNavbar}>
                  Lobby
                </Link>
              </NavLink>
              <NavLink>
                <Link to='/xrp' onClick={toggleNavbar}>
                  What is XRP?
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
