import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputText } from "../../common/InputText/InputText";
import NavBar from "../../common/Navbar/NavBar";
import { getUserData, nuevoAppointment } from "../services/apiCalls";
import { userData } from "../userSlice";
import { appointmentData } from "../appointmentSlice";

import "./newAppointment.css";

export const NewAppointment = () => {
  const navigate = useNavigate();
  const ReduxCredentials = useSelector(userData);
  const detallesAppointment = useSelector(appointmentData);

  const [treatments, setTreatments] = useState([
    {
        id:1,
        servicename: "Extraccion"
    },
    {
        id:2,
        servicename: "blanqueamiento"
    }
  ]);

  const [appointments, setAppointments] = useState({
    service_id: "",
    doctor_id: "",
    user_id: ReduxCredentials.credentials.usuario.userId,
    payment: "",
    date: "",
  });

  const inputHandler = (e) => {
    console.log(e.target.value);
    setAppointments((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(appointments);

  const checkError = (e) => {};
  //

  const registerappointment = () => {
    nuevoAppointment(appointments, ReduxCredentials.credentials.token)
      .then((resultado) => {
        setAppointments(resultado.data);
        console.log(resultado);

        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <NavBar />
      <hr />
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4>New appointment</h4>
        <Form>
          <Form.Select  name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
            <option>Open this select menu</option>
            {/* <option value="1">Extraccion</option>
            <option value="2">Blanqueamiento</option> */}

            {treatments.map((treatment)=> {
                return (
                    <option value={treatment.id}>{treatment.servicename}</option>
                )
            })}



          </Form.Select>
          <Form.Group>
            <Form.Label>Doctor:</Form.Label>
            <InputText
              className={"inputProfile"}
              type={"text"}
              name={"doctor_id"}
              placeholder={"Choose your doctor"}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Payment method:</Form.Label>
            <InputText
              className={"payment"}
              type={"boolean"}
              name={"payment"}
              placeholder={"Cash / Card"}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date and hour:</Form.Label>
            <InputText
              className={"date"}
              type={"datetime-local"}
              name={"date"}
              placeholder={"date"}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
            />
          </Form.Group>
          <br />
          <div className="botonModificar">
            <Button variant="primary" onClick={registerappointment}>
              Create Appointment
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
