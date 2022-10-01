import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // VERIFICA SI EXISTE EN EL CARRITO
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  useEffect(() => {
    /* console.log("useefect:", cart); */
  }, [cart]);

  // AGREGA AL CARRITO 
  // SI YA EXISTE EN CARRITO LO ADICIONA CAMBIANDO LA CANTIDAD
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const prodId = cart.find((x) => x.id === item.id);
      if (prodId) {
        const newQuantity = prodId.quantity + quantity;
        const newCart = cart.filter((enCarrito) => enCarrito.id !== item.id);
        setCart([...newCart, { ...item, quantity: newQuantity }]);
      }
      return true;
    } else {
      setCart([...cart, { ...item, quantity }]);
      return true;
    }
  };

  // BORRA TODO EL CARRITO
  const clear = () => {
    setCart([]);
  };

  // BORRO UN ITEM (FILTRO TODOS EXCLUYENDO EL QUE BORRO)
  const removeItem = (itemId) => {
    setCart(cart.filter((enCarrito) => enCarrito.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
