
import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Carrito from './Carrito/Carrito';
import {Link} from "react-router-dom";

const Navbar = () => {

 return (                                  
        <>
             <Row className="row">
                <Col className="col-logo">                               
                    <Nav.Item><Nav.Link><Link to="/"><h1>MAGNOLIA</h1></Link></Nav.Link></Nav.Item>        
                </Col>
                <Col className="col-carrito">               
                   <Carrito/>             
                </Col>


               </Row>
               <Row>
                 <div className="menu">                       
                     <Nav>                                
                        <Nav.Item><Link to="/Manifesto">MANIFESTO</Link></Nav.Item>
                        <Nav.Item><Link to={`/categories/${encodeURI("Diffusers")}`}>DIFFUSERS</Link></Nav.Item>
                        <Nav.Item><Link to={`/categories/${encodeURI("Home")}`}>HOME</Link></Nav.Item>
                        <Nav.Item><Link to={`/categories/${("Fragance")}`}>FRAGANCE</Link></Nav.Item>
                        <Nav.Item><Link to={`/categories/${("Women")}`}>WOMENSWEAR</Link></Nav.Item>                                                                  
                    </Nav>
                 </div>  
               </Row> 
      </>                      
   );
};

export default Navbar;
