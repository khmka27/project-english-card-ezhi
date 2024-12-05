import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './ui/NavBar';
import Loader from './HOCs/Loader';
import Footer from './ui/Footer';

export default function Layout({ user, logoutHandler }) {
  return (
    <Loader showSpinner={user.status === 'fetching'}>
      <Container fluid className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <NavBar user={user} logoutHandler={logoutHandler} />
        <Outlet style={{ flex: 1 }} /> 
        <Footer />
      </Container>
    </Loader>
  );
}
