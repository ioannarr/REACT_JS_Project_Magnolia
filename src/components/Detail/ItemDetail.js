import React,{useState, useEffect, useContext} from 'react';
import { useHistory  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CartContext from '../Cart/CartContext';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import { db } from '../CardComponent/firebase';

 

const ItemDetail = () => {

  const [detail,setDetail] = useState([]);
  const {id}  = useParams(); 
  const {cart, addItem, totalCart} = useContext(CartContext);
  const history = useHistory();

  const getItemDetail = () => {
  const docs = [];
		db.collection('Featured')
    .get()
    .then(querySnapshot => {
				querySnapshot.forEach(doc => {
          // console.log(doc.id);
					docs.push({ ...doc.data(), id:doc.id});         
          // console.log(docs)
          let buscoItem = docs.filter(buscando => buscando.id  ===  id)
          setDetail(buscoItem);      
     });
	});
};

  useEffect(() => {
		getItemDetail();
	}, [id]);

    const onAdd = (counter) => {     
        addItem(detail, counter);
   } 

   //console.log(detail)
   return (
            <div>            
              <div>
                       {detail.map((MyDetail) => 
                         <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }} key={MyDetail.id}>
                          <Card.Img variant="top"  src={MyDetail.img} style={{ width: '30rem', margin: '20px' }} />
                            <Card.Body>
                              <Card.Title style={{textAlign:'center'}}>{MyDetail.category}</Card.Title>
                              <Card.Title style={{textAlign:'center'}}>{MyDetail.title}</Card.Title>
                              <Card.Title style={{textAlign:'center'}}>{MyDetail.description}</Card.Title>
                              <Card.Title style={{textAlign:'center'}}>${MyDetail.price}</Card.Title>
                            </Card.Body>
                              <div style={{backgroundColor:'white'}}><Counter onAdd={onAdd}/></div>                                                                     
                          </div>
                        )}
              </div>
                       <Container style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                         <div style={{ display: 'flex', flexDirection: 'column', marginTop:'2%', alignItems:'center' }}>{cart.length>0 ? <Button variant ="dark"className="yesCart" onClick={()=> {history.push('/Cart'); totalCart(); }} >Terminar Compra</Button>: '' }</div>
                       </Container>                                 
            </div> 
      ); 
      
};

export default ItemDetail;
