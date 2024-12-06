import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../CSS/NavBar.css';

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar className="custom-navbar" data-bs-theme="light">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="text-center"
          style={{ lineHeight: '1' }}
        >
          <img src="../public/logo.svg" alt="logo" style={{ height: '75px' }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          {!user.data && (
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          )}
          {user.data && (
            <>
              <NavLink to="/themes" className="nav-link">
                Themes
              </NavLink>
            </>
          )}
        </Nav>
        <Nav>
          <span className="nav-link">
            {user.data ? <Link to="/profile">{user?.data.name}</Link> : 'Guest'}
          </span>
        </Nav>
        {user.data && (
          <span>
            <Button onClick={logoutHandler} className="custom-logout-button">
              <img src="../public/exit-door.svg" alt="exit" style={{ height: '30px' }} />
            </Button>
          </span>
        )}
      </Container>
    </Navbar>
  );
}
