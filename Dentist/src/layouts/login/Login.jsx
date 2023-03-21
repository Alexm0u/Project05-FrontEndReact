import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../common/Navbar/NavBar';

export function Login() {
    let user = {
        email: '',
        password: ''
    };
    const [valor, setValor] = useState(user);
    const { email, password} = valor;
    const newValue = ({target}) => {

        const {name, value} = target;
        setValor({...valor,[name]:value});
    }
    return (
        <>
        <NavBar />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <div className='formulario'>
                <Form>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email"  name="email" placeholder="Email..."  value={email} onChange={newValue}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password..." value={password} onChange={newValue} />
                    </Form.Group>
                    <br />
                    <div className='botones'>
                        <Button variant="primary" className='botonLogin' style={{ width: "5em", height: "1.9em",}}  type="submit">
                        Log Me
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
        </>
    );
}