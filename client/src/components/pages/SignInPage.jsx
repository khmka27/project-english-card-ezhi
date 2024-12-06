import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../CSS/SignInPage.css';

export default function SignInPage({ signInHandler }) {

  return (
    <div className="register-form">
      <div className="signin-container">
        <h3 className="text-center">SIGN IN</h3>
        <Form onSubmit={signInHandler} className="signin-form" >
          <Form.Group className="group-email" controlId="email">
            <Form.Label
              style={{
                top: '100px',
                marginRight: '480px',
              }}
            >
              Email
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              className="form-control"
            />
          </Form.Group>
          <Form.Group className="group-password" controlId="password">
            <Form.Label
              style={{
                marginRight: '450px',
              }}
            >
              Password
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              className="form-control"
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="submit-button">
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
}