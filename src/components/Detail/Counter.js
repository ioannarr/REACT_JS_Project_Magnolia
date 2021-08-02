import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Counter = ({onAdd}) => {

const[counter,setCounter] = useState(1);

   function Increment () {
            setCounter(prevcounter => prevcounter + 1)                        
    }

    const Decrement = () => {
        if(counter>0){
            setCounter(counter => counter-1)
        } else {
        setCounter(0);        
      }
   }

    

    return(
            <div>                   
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '2%' }}>             
                        <Button variant="dark" onClick={Increment}>+</Button>
                        <input className="mb-3 form-control" value={(counter)}></input>                 
                        <Button variant="dark" onClick={Decrement}>-</Button>           
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', marginTop: '2%' }}> 
                        <Button variant="dark" onClick={()=> onAdd(counter)}>Agregar</Button>
                    </div>
               
        </div>    
    );
}
export default Counter;