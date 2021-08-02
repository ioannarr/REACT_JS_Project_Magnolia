import React from 'react'
import Container from 'react-bootstrap/Container'
import ItemList from './ItemList';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';


function ItemListContainer() {

    return (

        <div>
            <Jumbotron fluid>
                <div>
                    <h2 style={{textAlign:'center'}}>FEATURED PRODUCTS</h2>    
                </div>   
                    <Row style={{justifyContent:'center'}}>
                    <ItemList/>
                    </Row>
            </Jumbotron> 
 
        </div>
             
    )
};

export default ItemListContainer;