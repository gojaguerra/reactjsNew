import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";

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
    const ToastIng = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    if (isInCart(item.id)) {
      const prodId = cart.find((x) => x.id === item.id);
      if (prodId) {
        const newQuantity = prodId.quantity + quantity;
        const newCart = cart.filter((enCarrito) => enCarrito.id !== item.id);
        setCart([...newCart, { ...item, quantity: newQuantity }]);
        ToastIng.fire({
          icon: "success",
          title: `Se agrego ${quantity} producto al carrito`, //'Ingreso al pedido'
        });
      }
      return true;
    } else {
      setCart([...cart, { ...item, quantity }]);
      ToastIng.fire({
        icon: "success",
        title: `Se agrego ${quantity} producto al carrito`, //'Ingreso al pedido'
      });
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
    const ToastIng = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    ToastIng.fire({
      icon: "success",
      title: `Se elimino el producto al carrito`, //'Ingreso al pedido'
    });
    return true;    
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
