import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../CSS/NavBar.css';

export default function NavBar({ user, logoutHandler }) {
  return (
    <Navbar className="custom-navbar" data-bs-theme="light">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/themes" className="nav-link">
            Themes
          </NavLink>
          {user.data && (
            <>
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
              <NavLink to="/themes" className="nav-link">
                Themes
              </NavLink>
            </>
          )}
        </Nav>
        <Nav>
          {!user.data && (
            <>
              <NavLink to="/auth/signin" className="nav-link">
                Sign in
              </NavLink>
              <NavLink to="/auth/signup" className="nav-link">
                Sign Up
              </NavLink>
              
              <span className="nav-link">|</span>
            </>
          )}
          <span className="nav-link">
            {user.data ? user.data.name : 'Гость'}
          </span>
          {user.data && (
            <span className="nav-link">
              <Button
                onClick={logoutHandler}
                variant="outline-danger"
                size="sm"
              >
                Logout
              </Button>
            </span>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
