import React,{useState, useEffect,useContext} from 'react';
import { useHistory  } from 'react-router-dom';
import CartContext from "../Cart/CartContext";
import FormComponent from './FormComponent';
import {db}  from '../CardComponent/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const styles = {
	cardStyles1: {
        display: 'flex', 
        flexDirection: 'column',
        alignItems:'center',
		backgroundColor: '#F6EDE6',
		padding: 20,
		margin: 10,
		borderRadius: 8,
		boder: '1px solid #F6EDE6',
	},
    cardStyles2: {
        display: 'flex', 
        flexDirection: 'column',
        alignItems:'center',
		backgroundColor: '#F6EDE6',
        padding: 20,
		margin: 10,
		borderRadius: 8,
		boder: '1px solid #F6EDE6',
    },
    cardStyles3: {
        display: 'flex', 
        flexDirection: 'column',
        textAlign:'center',
        	},
};

const Products = () => {

const {cart} = useContext(CartContext);
const history = useHistory();
//console.log(cart)

const[customer,setCustomer]= useState([])

const createOrder = async (myOrder) =>{
await db.collection('MagnoliaOrders')
        .doc()
        .set(myOrder);
    	console.log('Orden Creada')
};

const getOrder = () => {
    db.collection('MagnoliaOrders').onSnapshot((querySnapshot) => {     
        const docs= [];
        querySnapshot.forEach((doc)=>{
            //console.log(doc.data())
            docs.push({...doc.data(),id: doc.id });
            //console.log(docs)
        });
        setCustomer(docs);
    });

}
useEffect(()=>{
getOrder();

},[]);

//console.log(firebase.firestore.Timestamp.fromDate(new Date()).toDate().toDateString())
//console.log(customer)
//console.log(cart)
return (
 <>        
		<div>		
            <FormComponent createOrder={createOrder}/>
            
			{cart.map((cartItem) => (
                cartItem.item.map((o) => (                                   
				<div key={o.id} style={styles.cardStyles1}>
                    <h3>Item Name: {o.title}</h3>
					<h3>Item Price: {o.price}</h3>
					<h3>Item Quantity: {cartItem.counter}</h3>
				</div>
                ))
			))}
		</div>
	);

        <div>      
            {customer.map((c) => (
            <div key={c.id}>
                   <div style={styles.cardStyles2}>
					    <h3>Email: {c.Email}</h3>
                        <h3>Name: {c.Name}</h3>
					    <h3>Phone: {c.Phone}</h3>
                        <h3>{firebase.firestore.Timestamp.fromDate(new Date()).toDate().toDateString()}</h3>
				    </div>
              
                        <h1 style={{textAlign:'center', margin:'auto', marginTop: '2%', marginBottom: '2%'}}>THANK YOU FOR SHOPPING</h1>
     
                   
             </div>
             ))}
        </div>
       
        {/* <div className="Order">
            <Button onClick={()=> history.push('/Landing')} variant="dark">HOME</Button>
        </div> */}
</>

);

};

export default Products;