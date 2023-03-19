import React from 'react'
import NavBar from '../../common/Navbar/NavBar'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function Login() {
  return (
    <>
      <NavBar />
      <hr />
      <div style={{
        display: 'block',
        width: 700,
        padding: 30
      }}>
        <h4>Login</h4>
        <Form>
          <Form.Group>
            <Form.Label>Enter your email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your your email address" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your password:</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>
          <br />
          <div className='botones'>
            <Button variant="primary" className='loginButton' style={{ width: "5.5em", height: "2em", }} type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}


