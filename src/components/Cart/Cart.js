import React, {useContext}  from 'react';
import { useHistory  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CartContext from './CartContext';
import Table from 'react-bootstrap/Table'
import { Jumbotron, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import './Cart.css';

const CartView = () => {
    const {cart, removeItem, clear,totalCart, totalQuantity} = useContext(CartContext);
    console.log(cart);
    const {id}  = useParams(); 
    const history = useHistory(); 


    return (        
        <div>
            <Jumbotron>
        <div>
                <h1 style={{textAlign:'center', marginBottom: '2%'}}>SHOPPING CART</h1>               
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                            <tr>
                            <th>Item Title</th>
                            <th>Item Price</th>
                            <th>Item Quantity</th>
                            <th>Item Total</th>                           
                            <th>Actions</th>
                            </tr>
                    </thead>
                    <tbody>
          
            { (cart.length>0) ?          
                cart.map((c,i) => {
                    return(
                      <>                             
                                <tr key={i}>                                 
                                    <td>{c.item !==undefined ? c.item[0].title : "empty" }</td>
                                    <td>{c.item !==undefined ? c.item[0].price : "empty"}</td>
                                    <td>{c !==undefined ? c.counter: "empty"}</td>
                                    <td>{c.item !==undefined ?(c.counter * c.item[0].price).toFixed(2): "empty"}</td>                                            
                                    <td>   
                                        <div className="Actions">
                                            <Button style={{margin:"10px"}} variant= "dark" onClick={()=> history.goBack()}>Edit</Button>
                                            <Button style={{margin:"10px"}} variant= "dark" onClick={()=> removeItem(c.item)}>Remove</Button>
                                        </div>
                                    </td>
                                </tr> 
                        </>                 
                    )})
                       :
                    <div className="NoItem">
                        <h3>NO ITEMS IN CART</h3>
                        <Button style={{margin:"10px", alignItems: 'center'}} variant="secondary" onClick={()=> history.push('/')}>Home</Button>
                    </div>
                }
                    </tbody>
                    </Table>
                 
                </div>
            </Jumbotron>     
                <div className="Shopping">
                    <div>
                        <h3>Total Items: {cart.length} </h3>
                        <h3>Total Quantity of Items: {totalQuantity()}</h3>
                    </div>
                    <div>
                         <h3>Cart Total:{totalCart()}</h3>
                    </div>
                    <div>
                        <Button variant="dark" onClick={clear}>ClearCart</Button>
                        <Nav.Item><Nav.Link>
                        <Link to="/Order">    
                        <Button variant="dark"><span onClick={()=> history.push('/Order')}></span>MY ORDER </Button>                   
                        </Link>
                        </Nav.Link></Nav.Item>
                    </div>
                </div>
        </div>
        );
};
export default CartView;
