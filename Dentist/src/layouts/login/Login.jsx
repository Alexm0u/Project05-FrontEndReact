import React, {useState} from 'react'
import NavBar from '../../common/Navbar/NavBar'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export function Login() {
  let user = {
    email: '',
    password: ''
  };
  const [valor, setValor] = useState(user);
  const { email, password } = valor;
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
        <h4>Login</h4>
        <Form>
          <Form.Group>
            <Form.Label>Enter your email:</Form.Label>
            <Form.Control type="email" name="email" placeholder="Email..." value={email} onChange={newValue} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your password:</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password..." value={password} onChange={newValue} />
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


