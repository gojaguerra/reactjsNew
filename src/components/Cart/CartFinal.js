import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

// MUESTRA LOS DETALLES DE LA COMPRA LUEGO DE GRABAR EL PEDIDO EN FIREBASE

const CartFinal = () => {
  const { cart, clear } = useContext(CartContext);
  const [newOrder, setNewOrder] = useState([]);
  const { idFirestore } = useParams();
  const totalCart = newOrder.reduce(
    (acumulador, items) => acumulador + items.quantity * items.price,
    0
  );

  const getProducts = () => {
    setNewOrder(cart);
    clear();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>Pedido enviado con exito!</h2>
      <h4>Tu id de pedido es: ${idFirestore}</h4>
      <h4>El total del pedido es: ${totalCart}</h4>
      <div className="modal-carrito">
        {newOrder.map((item) => (
          <div key={item.id} className="productoEnCarrito">
            <p>{item.name}</p>
            <p>{item.quantity} unid.</p>
            <p>${item.price}</p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartFinal;
