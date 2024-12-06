import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../CSS/SignUpPage.css';

export default function SignUpPage({ signUpHandler }) {

  return (
    <div className="register-form">
      <div className="signup-container">
        <h3 className="text-center">SIGN UP</h3>
        <Form onSubmit={signUpHandler} className="signup-form" >
        <Form.Group className="group-name" controlId="name">
            <Form.Label
              style={{
                top: '100px',
                marginRight: '480px',
              }}
            >
              Name
            </Form.Label>
            <Form.Control
              name="name"
              type="name"
              placeholder="Enter name"
              className="form-control"
            />
          </Form.Group>
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
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}
