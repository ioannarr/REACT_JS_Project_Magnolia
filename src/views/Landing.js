import React from 'react';
import './Landing.css';
import { useHistory  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './img1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Landing = ({coleccion,temporada}) => {
const history = useHistory();    
    return ( 
        <>        
            <Container fluid className="customCont">
                <Row>
                    <Col>
                        <Container>
                            <div className="centrado">
                                <p style={{ fontSize: '50px' }}>SEASON {coleccion} {temporada}</p>
                                <Button variant="dark" style={{ marginLeft: '65%' }} onClick={()=> history.push('/categories/home')}>View Featured</Button>
                            </div>
                        </Container>
                    </Col> 
                    
                    <Col>
                        <Container >
                            <div>
                                <img src={img} width="75%" alt="candle" height="50%" />
                            </div> 
                        </Container>
                    </Col>
                </Row>
            </Container>
    </>
 )             
};

Landing.defaultProps = {
    coleccion: " WINTER",
    temporada: " SS21",
            
};

export default Landing;