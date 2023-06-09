import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../common/Navbar/NavBar';
import { InputText } from '../../common/InputText/InputText';
import { validate } from "../../helpers/useful";
import { useNavigate } from "react-router-dom";
import { logMe } from '../services/apiCalls';
import { decodeToken } from 'react-jwt'
import { login } from '../userSlice';
import { useDispatch } from 'react-redux'
import './Login.css';



export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [credenciales, setCredenciales] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        fullNameError: "",
        emailError: "",
        passwordError: "",
    });

    const [valiUser, setValiUser] = useState({
        fullNameVali: false,
        emailVali: false,
        passwordVali: false,
    });

    const [LoginAct, setLoginAct] = useState(false);

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        for (let error in credencialesError) {
            if (credencialesError[error] !== "") {
                setLoginAct(false);
                return;
            }
        }
        for (let vacio in credenciales) {
            if (credenciales[vacio] === "") {
                setLoginAct(false);
                return;
            }
        }
        for (let validated in valiUser) {
            if (valiUser[validated] === false) {
                setLoginAct(false);
                return;
            }
        }
        setLoginAct(true);
    });

    const checkError = (e) => {
        let error = "";
        const checked = validate(
            e.target.name,
            e.target.value,
            e.target.required
        );
        error = checked.message;

        setValiUser((prevState) => ({
            ...prevState,
            [e.target.name + "Vali"]: checked.validated,
        }));

        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"]: error,
        }));
    };

    const logeame = () => {
        logMe(credenciales)
            .then((respuesta) => {
                const decToken = decodeToken(respuesta.data)
                let datosBackend = {
                    token: respuesta.data,
                    usuario: decToken
                };

                dispatch(login({ credentials: datosBackend }));
                setTimeout(() => {
                    navigate("/");
                }, 300);


            })
            .catch((error) => console.log(error));
    };


    return (
        <>
            <NavBar />
            <hr />
            <div className='zonaLogin'><div >
                <div className='formulario'>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <InputText
                                className={
                                    credencialesError.emailError === ""
                                        ? "inputBasicDesign"
                                        : "inputBasicDesign inputErrorDesign"
                                }
                                type={"email"}
                                name={"email"}
                                placeholder={"Email..."}
                                required={true}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <InputText
                                className={
                                    credencialesError.passwordError ===
                                        ""
                                        ? "inputBasicDesign"
                                        : "inputBasicDesign inputErrorDesign"
                                }
                                type={"password"}
                                name={"password"}
                                placeholder={"Password..."}
                                required={true}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={(e) => checkError(e)}
                            />
                        </Form.Group>
                        <br />
                        <div className='botones'>
                            <Button variant="primary" className='botonLogin' style={{ width: "5em", height: "1.9em", }} onClick={() => logeame()}>
                                Log Me
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            </div>
        </>
    );
}