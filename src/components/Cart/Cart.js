import React, {useContext}  from 'react';
import { useHistory  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CartContext from './CartContext';
import Table from 'react-bootstrap/Table'
import { Jumbotron } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Cart.css';

const CartView = () => {
    const {cart, removeItem, clear,totalCart, totalQuantity} = useContext(CartContext);
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
                            <th>Item Description</th>
                            <th>Item Price</th>
                            <th>Item Quantity</th>
                            <th>Item Total</th>                           
                            <th>Actions</th>
                            </tr>
                    </thead>
                    <tbody>
          
            { (cart.length>0) ?          
                cart.map((cartItem) => {
                    return(
                      <>   
                       {/* <div key={index}> */}
                        {cartItem.item.map((c,i) => {         
                             return( 
                               <> 
                                <tr key={i}>                                 
                                    <td>{c.title}</td>
                                    <td>{c.description}</td>
                                    <td>{c.price}</td>
                                    <td>{cartItem.counter}</td>
                                    <td>{(cartItem.counter * c.price).toFixed(2)}</td>                                            
                                    <td>   
                                        <div className="Actions">
                                            <Button style={{margin:"10px"}} variant= "dark" onClick={()=> history.goBack()}>Edit</Button>
                                            <Button style={{margin:"10px"}} variant= "dark" onClick={removeItem}>Remove</Button>
                                        </div>
                                    </td>
                                </tr> 
                            </>
                            )})}
                        {/* </div>                     */}
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
                    </div>
                </div>
        </div>
        );
};
export default CartView;
