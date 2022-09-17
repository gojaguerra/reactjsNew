import React, { createContext, useEffect, useState } from "react";

export const CartContext=createContext();

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
      return (
          cart.some(item => item.id === id)
      )
    }

    useEffect(()=>{
      console.log(cart);
    }, [cart]);

    // AGREGA AL CARRITO VERIFICANDO NO EXISTA
    const addToCart = (item, quantity) => {
      if (isInCart(item.id)) {
          alert("el producto esta en el carrito");
          return false;
          }else{
          setCart([...cart, {...item, quantity},]);
          alert(`Se agrego ${quantity} producto al carrito`);
          console.log(quantity);
          console.log(item);
          return true;
      };
    };
  
    // BORRA TODO EL CARRITO
  const clear = () => {
      setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clear }}>
        {children}
    </CartContext.Provider>
  )
};
