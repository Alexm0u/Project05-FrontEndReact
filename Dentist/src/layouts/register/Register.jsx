import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../common/Navbar/NavBar'
import './Register.css';

export function Register() {
  return (
      <>
      <NavBar />
      
      <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30 }}>
        <h4>Please fill the fields</h4>
        <Form>
            <Form.Group>
                <Form.Label>Enter your username:</Form.Label>
                <Form.Control type="text" placeholder="Name..." />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control type="email" placeholder="Email..." />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your password:</Form.Label>
                <Form.Control type="password" placeholder="Password..." />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    


    </>
  )
}
