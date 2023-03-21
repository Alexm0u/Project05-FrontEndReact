import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { InputText } from '../../common/InputText/InputText';
import { validate } from '../../helpers/useful';
import Button from 'react-bootstrap/Button';
import NavBar from '../../common/Navbar/NavBar';
import './Register.css';


export function Register() {

    let user = {
        fullname: '',
        email: '',
        password: '',
    };

    const [valor, setValor] = useState(user);
    const { fullname, email, password } = valor;
    const newValue = ({ target }) => {
        const { name, value } = target;
        setValor({ ...valor, [name]: value })
    }
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
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control type="text" name="fullname" placeholder="Name and Surname..." changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email:</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email..." changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your password:</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password..." changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} />
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
