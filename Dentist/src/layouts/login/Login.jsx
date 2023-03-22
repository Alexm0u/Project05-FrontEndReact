import React, { useState, useEffect }  from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from '../../common/Navbar/NavBar';
import { InputText } from '../../common/InputText/InputText';
import { validate } from "../../helpers/useful";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
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

    const loginUser = () => {
        newUser(credenciales)
            .then(() => {
                setTimeout(() => {
                    navigate("/profile");
                }, 2000);
            })
            .catch((error) => console.log(error));
    };

    
    return (
        <>
        <NavBar />
        <div style={{ display: 'block', width: 700, padding: 30 }}>
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