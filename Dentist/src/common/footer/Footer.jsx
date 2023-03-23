import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'



export const Footer = () => {
    return (
    <>
<div className="Foot" >
    <Container >
<Row>
        <Col className='margin mt-2'>  
        <h4>CINDY ENTES</h4>
        <p> <i class="bi bi-geo-alt"></i> C/Ally Gator, 13</p>
        <p> <i class="bi bi-globe-europe-africa"></i> Tetthwith, VLC</p>
        </Col>
    <Col className='margin mt-2'>
        <h4>Contact</h4>
        <p> <i class="bi bi-telephone"></i> +34 123 456 789 </p>
        <p> <i class="bi bi-envelope-open-heart"></i> info@Cindy-Entes.com </p>
        </Col>
    <Col className='margin mt-2'>
            <h4>Opening Hours</h4>
            <p><i class="bi bi-clock"></i> Monday - Friday</p>
            <p> 9:00am to 20:30pm </p>
        </Col>
    <Row>
            <Col className='W1 mt-3 mb-1'><h3><i class="bi bi-whatsapp"></i></h3></Col>
            <Col className='W2 mt-3 mb-1'><h3><i class="bi bi-facebook"></i></h3></Col>
            <Col className='W3 mt-3 mb-1'><h3><i class="bi bi-instagram"></i></h3></Col>
    </Row>
    <Row>
        <Col className='Copy mt-2'>
            <p>&copy;{new Date().getFullYear()} Created by Alexm0u - All Rights Reserved </p>
            </Col>
    </Row>
</Row>
    </Container>
</div>
    </>
    )
}
