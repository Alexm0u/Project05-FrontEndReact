import React from 'react';
import NavBar from '../../common/Navbar/NavBar';
import './Profile.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function Profile() {
  return (
    <>
      <NavBar />
      
      <div style={{
        display: 'block',
        width: 700,
        padding: 30
      }}>
        <h4>Please fill the fields</h4>
        <Form>
          <Form.Group>
            <Form.Label>Full Name:</Form.Label>
            <Form.Control type="text" placeholder="Name..." />
          </Form.Group>
          <Form.Group>
            <Form.Label>DNI:</Form.Label>
            <Form.Control type="text" placeholder="DNI..." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="tel" placeholder="Phone..." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Email..." />
          </Form.Group>
          <br />
          <Form.Select aria-label="Payment Method">
            <option>Choose your payment</option>
            <option value="1">Card</option>
            <option value="2">Cash</option>
            <option value="3">Paypal</option>
          </Form.Select>
          <br />
          <div className='updateButton'>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
