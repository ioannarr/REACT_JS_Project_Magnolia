import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { useHistory  } from 'react-router-dom';
import CartContext from "../../Cart/CartContext";
import './Carrito.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Button, Nav,Col} from 'react-bootstrap';

const Carrito = () => {

    const {totalQuantity} = useContext(CartContext);
    const history = useHistory();

        return (
            <Col className="col-carrito">
                <div className ="carrito">
                <Nav.Item><Nav.Link>
                 <Link to="/Cart"> 
                 <Button variant="dark"><span className="glyphicon glyphicon-shopping-cart"  onClick={()=> history.push('/Cart')}></span>MY CART {totalQuantity()}</Button>             
                </Link>
                </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>
                <Link to="/Order">    
                <Button variant="dark"><span onClick={()=> history.push('/Order')}></span>MY ORDER </Button>                   
                </Link>
                </Nav.Link></Nav.Item>
                </div>
            </Col>
            );
            
}

export default Carrito;
