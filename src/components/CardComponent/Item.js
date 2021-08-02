import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import Card from 'react-bootstrap/Card';


const Item = ({item}) => {

return(
  <div>   
        <Card style={{ width: '18rem',margin: '20px' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
        <Card.Title style={{ fontFamily:'serif', color:'black', textAlign:'center'}}>{item.category}</Card.Title>
          <Card.Title style={{ fontFamily:'serif', color:'black', textAlign:'center'}}>{item.title}</Card.Title>
          <Card.Title style={{ fontFamily:'serif', fontWeight: 'bolder', color:'black', textAlign:'center'}}>${item.price}</Card.Title> 
        </Card.Body>
      </Card>  
    </div>
  );

};
export default Item;
 