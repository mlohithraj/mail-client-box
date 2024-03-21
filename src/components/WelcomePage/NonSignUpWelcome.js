import React, { Fragment, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'

import classes from './nonSignUpWelcome.module.css';

const NonSignUpWelcome = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <Fragment>
      {' '}
      {/* Use Fragment instead of <div> */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Mail App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLogin && (
                <Link to="/signUp" onClick={handleLogout}>
                  Login/SignUp
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NonSignUpWelcome;
