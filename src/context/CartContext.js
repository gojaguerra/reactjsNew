import React, { createContext, useEffect, useState } from "react";

export const CartContext=createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{

    }, [cart]);

    const addToCart = (item, quantity) => {
        setCart([...cart, {...item, quantity}]);
        console.log(quantity);
        console.log(item);
        console.log(cart);
    };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
        {children}
    </CartContext.Provider>
  )
};
