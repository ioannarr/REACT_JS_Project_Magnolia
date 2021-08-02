import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Landing from '../views/Landing';
import Manifesto from "../views/Manifesto";
import ItemDetail from '../components/Detail/ItemDetail';
import Cart from '../components/Cart/Cart';
import Order from '../views/Order';

import ItemListContainer from "../components/CardComponent/ItemListContainer";

export default function Rutas() {
    
 return (

          <div>      
            <Navbar /> 
            <Switch>             
              <Route exact path="/" component={Landing}/>
              <Route path="/Manifesto" component ={Manifesto}/>  
              <Route path="/All" component = {ItemListContainer}/>
              <Route path="/categories/:categoryId" component = {ItemListContainer} />  
              <Route path="/detail/:id"component={ItemDetail}/> 
              <Route path="/Cart"component={Cart}/>
              <Route path="/Order"component={Order}/>                
            </Switch>  
        </div>
 
  
);

};
