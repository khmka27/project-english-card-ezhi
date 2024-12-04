import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/NavBar';
import Loader from './HOCs/Loader';
import Footer from './ui/Footer';
export default function Layout({ user, logoutHandler }) {
  return (
    <Loader showSpinner={user.status === 'fetching'}>
      <Container fluid>
        <NavBar user={user} logoutHandler={logoutHandler} />
        <Outlet />
        <Footer />
      </Container>
    </Loader>
  );
}
