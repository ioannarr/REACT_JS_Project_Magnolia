import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import CartContext from './CartContext';

export default function CartProvider ({defaultValue = [], children}) {

const[cart, setCart] = useState(defaultValue);
// console.log(cart);
// const {id} = useParams();

const addItem = (item, counter) =>{
    // console.log(item)
    if(isInCart(item.id)) {
        const cartNuevo = cart.map((cartItem) => {
            cartItem.item.map ((c)=>{

            if(cartItem.item.id === item.id){
            
                return { 
                    cartItem, counter: cartItem.counter + counter
                }
            } else {
                return cartItem;
            }             
        })
    })
 setCart(cartNuevo);
  
    } else {                   
        setCart([...cart, {item,counter}]);
    }
};


const totalQuantity = () =>{
    let totalQ = 0
    cart.forEach((cartItem)=>{
    totalQ += cartItem.counter
    })
    return totalQ;
}
      
const totalCart = () =>{
        
    let total = 0;        
        cart.map((cartItem)=>{            
            cartItem.item.map((c) =>{
                // console.log(cartItem.counter) 
                // console.log(c.price) 
                total += cartItem.counter * c.price;
            })
            // console.log(total)
                           
        })  
        return total;   
                
 };

const removeItem = (item) => {
   
     let index = cart.findIndex((c) => c.item.id === item.id)
     if (index!==-1){                                
         console.log(index)
         setCart(cart.splice(index+1,1))
     }              
};


const clear = () => {
    setCart(defaultValue);
};

const isInCart = (id) => {
    let parsing = parseFloat(id)
    const findInCart = cart.find((cartItem) => cartItem.item.id === parsing);
    // console.log(parsing)
       if(findInCart){
          return true;
             }else{
          return false;
             }

    };

    return(
        <div>
            <CartContext.Provider value={{cart, setCart,addItem, clear, isInCart, removeItem,totalCart,totalQuantity}}>
            {children}
            </CartContext.Provider>
        </div>
    );
}

