import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../common/Navbar/NavBar';
import './Register.css';
import { useState } from 'react';

export function Register() {

    let user = {
        fullname: '',
        email: '',
        password: '',
    };

    // const inputHandler = (e) => {
    //     setUserData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }));
    // }

    // const inputValidate = (e) => {};

    const [valor, setValor] = useState(user);
    const {fullname, email, password} = valor;
    const newValue = ({target}) => {
        const {name, value} = target;
        setValor ({...valor,[name]:value})
    }
  return (
      <>
      <NavBar />
      
      <div style={{ display: 'block', 
                    width: 700, 
                    padding: 30 }}>
        <h4>Please fill the fields</h4>
        <Form>
            <Form.Group>
                <Form.Label>Enter your name:</Form.Label>
                <Form.Control type="text" name="fullname" placeholder="Name and Surname..." changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your email:</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email address"  changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter your password:</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password"  changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)}/>
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
