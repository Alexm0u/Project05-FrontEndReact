import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from '../../common/Navbar/NavBar';
import { getAppointmentAsUser } from '../services/apiCalls';
import { userData } from "../userSlice";
import { Card, ListGroup } from 'react-bootstrap';

export const CatchAppointmentAsUser = () => {

  const ReduxCredentials = useSelector(userData);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (appointments.length === 0) {
      getAppointmentAsUser(ReduxCredentials.credentials?.token)
        .then((info) => {
          setAppointments(info.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [appointments]);
  console.log(appointments)
  return (
    <>
      <NavBar />
      <hr />
      <Container className="appoinment">
        <Row>
          <Col>
            <div className='usersDesign'>
              {appointments.length > 0 ?
                (<div>
                  {
                    appointments.map(
                      appointment => {
                        return (
                          <div key={appointment.id}>
                            <Card style={{ width: '20rem' }}>
                              <ListGroup variant="flush">
                                <ListGroup.Item>SERVICE NAME: {appointment.Service.servicename}</ListGroup.Item>
                                <ListGroup.Item>DURATION: {appointment.Service.duration} min</ListGroup.Item>
                                <ListGroup.Item>PRICE: {appointment.Service.price} €</ListGroup.Item>
                                <ListGroup.Item>DATE: {appointment.date}</ListGroup.Item></ListGroup>
                            </Card>
                            {/* <ol>
                                                    <li>{appointment.Service.servicename}</li>
                                                    <li>{appointment.Service.duration}</li>
                                                    <li>{appointment.Service.price}</li>
                                                    <li>{appointment.date}</li>
                                                  </ol> */}
                          </div>
                        )
                      }
                    )
                  }
                </div>)
                :
                (<div>ESTAN VINIENDO</div>)
              }
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
}
