import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // VERIFICA SI EXISTE EN EL CARRITO
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  useEffect(() => {
    /* console.log(cart); */
  }, [cart]);

  // AGREGA AL CARRITO VERIFICANDO NO EXISTA
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      alert("el producto esta en el carrito");
      return false;
    } else {
      setCart([...cart, { ...item, quantity }]);
      // alert(`Se agrego ${quantity} producto al carrito`);
      // console.log(quantity);
      // console.log(item);
      return true;
    }
  };

  // BORRA TODO EL CARRITO
  const clear = () => {
    setCart([]);
  };

  // BORRO UN ITEM (FILTRO TODOS EXCLUYENDO EL QUE BORRO)
  const removeItem = (itemId) => {
    const productCart = cart.filter(enCarrito => enCarrito.id !== itemId);
    setCart(productCart);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
