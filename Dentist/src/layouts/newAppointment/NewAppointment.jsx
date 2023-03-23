import React, { useEffect, useState } from 'react'
import { InputText } from '../../common/InputText/InputText';
import NavBar from '../../common/Navbar/NavBar';
import { nuevoAppointment } from '../services/apiCalls';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { useNavigate } from 'react-router-dom';

export const NewAppointment = () => {

    const credencialesRedux = useSelector(userData);
    // const navigate = useNavigate();
    console.log(credencialesRedux.credentials.usuario)
   

        const [appointment, setAppointment] = useState({
            service_id: '',
            doctor_id: '',
            user_id:'',
            payment: '',
            date: '',
        });

        const inputHandler =(e) => {
            setAppointment((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        };
        // useEffect(()=>{
        //     if (appointment.name === ""){
        //         nuevoAppointment().then(
        //             resultado => {console.log(resultado)}
        //         ).catch(error => (console.log(error)))
        //     }
        // }, [appointment]);

        const checkError = (e) => {}

        const newAppointment = () => {
            nuevoAppointment(appointment, credencialesRedux.credentials.token )

            .then(regAppointment => {
                setAppointment(regAppointment.data)
                
            })
            .catch(error => {setAppointment(error.message)}

        )}
        

    
  return (
    <>
    <NavBar/>
    <div style={{ display: 'block',
                    width: 700,
                    padding: 30 }}>
        <h4>React-Bootstrap Form Component</h4>
        <Form>
            <Form.Group>
                <Form.Label>Service Id:</Form.Label>
                <InputText className={"service_id"}
                                type={"number"} name={"service_id"} placeholder={"service_id"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>doctor_id:</Form.Label>
                <InputText className={"inputProfile"}
                                type={"number"} name={"doctor_id"} placeholder={"doctor_id"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>payment:</Form.Label>
                <InputText className={"payment"}
                                type={"boolean"} name={"payment"} placeholder={"payment"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>date:</Form.Label>
                <InputText className={"date"}
                                type={"date"} name={"date"} placeholder={"date"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
            <br />
            <div className='botonModificar'>
                <Button variant="primary" onClick={() => newAppointment()}>
                    New Appointment
                </Button>
            </div>
        </Form>
        </div>
        </>
    );
}

