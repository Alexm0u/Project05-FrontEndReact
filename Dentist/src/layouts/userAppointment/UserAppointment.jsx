import React, { useEffect, useState}  from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from '../../common/Navbar/NavBar';
import { getAppointmentAsUser } from '../services/apiCalls';
import { userData } from "../userSlice";

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
    console.log (appointments)
    return (
        <>
        <NavBar />
        <hr />
        <Container className="appoinment">
            <Row>
                <Col>
                        <div className='usersDesign'>
                    {  appointments.length > 0 ? 
                        (<div>
                            {
                                appointments.map(
                                    appointment => {
                                        return (
                                            <div 
                                                
                                                key={appointment.id}>
                                                  <ol>
                                                    <li>{appointment.Service.servicename}</li>
                                                    <li>{appointment.Service.duration}</li>
                                                    <li>{appointment.Service.price}</li>
                                                    <li>{appointment.date}</li>
                                                  </ol>
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
