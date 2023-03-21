import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { InputText } from '../../common/InputText/InputText';
import { validate } from '../../helpers/useful';
import Button from 'react-bootstrap/Button';
import NavBar from '../../common/Navbar/NavBar';
import './Register.css';


export function Register() {

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const inputHandler = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const inputValidate = (e) => { };
    let user = {
        fullname: '',
        email: '',
        password: ''
    };


    const [valor, setValor] = useState(user);
    const { fullname, email, password } = valor;
    const newValue = ({ target }) => {
        console.log(target);
        const { name, value } = target;
        setValor({ ...valor, [name]: value });
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
                        <Form.Label>Name and surname:</Form.Label>
                        <Form.Control type="text" name="fullname" placeholder="Name and surname..." value={fullname} onChange={newValue} />
                    {/* // changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} /> */}
                        {/* <InputText type="text" name="fullname" placeholder="Enter your name and surname" changeFunction={(e) => inputHandler(e)}
                        validateFunction={(e) => inputValidate(e)} /> */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email..."  value={email} onChange={newValue} />
                    {/* // changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} /> */}
                     {/* <InputText type="email" name="email" placeholder="Enter your your email address" changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)} /> */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password..."  value={password} onChange={newValue} />
                    {/* // changeFunction={(e) => inputHandler(e)} validateFunction={(e) => inputValidate(e)} /> */}
                    {/* <InputText type="password" name="password" placeholder="Enter your password" changeFunction={(e) => inputHandler(e)}
                    validateFunction={(e) => inputValidate(e)} /> */}
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
