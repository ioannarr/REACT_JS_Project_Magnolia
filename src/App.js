import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import CartProvider from './components/Cart/CartProvider';
import Rutas from './router/Rutas';
import  {Row, Col} from 'react-bootstrap';


class App extends React.Component {
  render(){

  return (
    <CartProvider>
      <Router>     
        <div>         
            <div>             
                <Row>               
                    <Col>                 
                    <Rutas/>
                    </Col>
                </Row>
            </div>        
        </div>   
      </Router>
    </CartProvider>    
     
      );
    
    }

}

export default App;
