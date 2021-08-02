import React, {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'; 
import Item from './Item';
import './ItemList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './firebase';

export default function ItemList() {

const{categoryId} = useParams();
const[items,setItems] = useState([]);

const getFeatured = () => {
const docs = [];
    db.collection('Featured').get()
    //.where ('category','==', category)
    .then(querySnapshot => {
           querySnapshot.forEach(doc =>{
           docs.push({...doc.data(), id:doc.id});
           let itemsFilter = docs.filter( cat => cat.category === categoryId ) 
           setItems(itemsFilter)
           //console.log(doc.data().category)          
           });
    //setItems(docs)         
  });
};

useEffect(() => {
  getFeatured();             
}, [categoryId]);

// console.log(items)

    const Listado = items.map((item) => { 
        return (
          <div key={item.id}>
            <Link to ={`/detail/${item.id}`}>
              <Item item={item} />
           </Link>
          </div>  
        );
      })     
      return (<div className ="flex">{Listado}</div>) 
};