import React,{useState} from 'react';
import CartContext from './CartContext';

export default function CartProvider ({defaultValue = [], children}) {

const[cart, setCart] = useState(defaultValue);
console.log(cart);


const addItem = (item, counter) =>{
    if(isInCart(item[0].id)) {
        cart.forEach((cartItem) => {
            console.log(counter)
            console.log(cartItem.item[0].id)
            console.log(item[0].id)
            if(cartItem.item[0].id === item[0].id){
                    cartItem.counter += counter               
            }                      
    })

    } else {                   
        setCart([...cart, {item,counter}]);
    }
};

const totalQuantity = () =>{
    let totalQ = 0
    cart.forEach((i)=>{
        console.log(i.counter)
    totalQ += i.counter
    })
    return totalQ;
}
      
const totalCart = () =>{
        
    let total = 0;        
        cart.forEach((cartItem)=>{            
                console.log(cartItem.counter) 
              
                if(cartItem.item !==  undefined){ 
                    console.log(cartItem.item[0].price)
                    total += cartItem.counter * cartItem.item[0].price;
                }
        })
        console.log(total)
    return total;     
 };

const removeItem = (item) => {
    console.log(item)
     let fitleredCart = cart.filter((c) => c.item[0].id !== item[0].id)
     
     setCart(fitleredCart)              
};


const clear = () => {
    setCart(defaultValue);
};

const isInCart = (id) => {
    console.log(id)
    const findInCart = cart.find((i) => i!== undefined ? i.item[0].id == id : null);
                   //console.log(cart[0].item[0].id)
    console.log(findInCart)
    
    if(findInCart !== undefined){
          return true;
             }else{
          return false;
             }
    };



    return(
        <div>
            <CartContext.Provider value={{cart, setCart,addItem, clear, isInCart, removeItem, totalCart, totalQuantity}}>
            {children}
            </CartContext.Provider>
        </div>
    );
}

