import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // VERIFICA SI EXISTE EN EL CARRITO
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  useEffect(() => {
    console.log("useefect:",cart);
  }, [cart]);

  // AGREGA AL CARRITO VERIFICANDO NO EXISTA
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      alert("el producto esta en el carrito");

      const prodId = cart.find(x=>x.id==item.id);
      console.log("prodid:",prodId);
      console.log("id:",prodId.id);
      console.log("uno:",cart);
      if(prodId){
        const newQuantity = prodId.quantity+quantity;


        /* const productCart = cart.filter(enCarrito => enCarrito.id !== prodId.id); */

       /*  setCart(cart.map(fruit => fruit.id === prodId.id ? quantity=newQuantity : fruit)); */

        /* console.log("dos:",productCart); */
        /* setCart(productCart, {...item, newQuantity}); */
        /* setCart(productCart); */
        console.log("cart 1: ",cart);
       /*  console.log(newQuantity);
        removeItem(prodId.id);
        console.log("cart 1: ",cart);
        setCart([...cart, { ...item, newQuantity }]);
        console.log(cart);
        const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.price), 0);
        console.log(totalCart); */
      }


      return true;
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
