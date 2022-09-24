import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantityCart = cart.reduce((acumulador, cantidad) => acumulador + cantidad.quantity, 0);
  
   return (
     <>
     <Link className='cartCant' to={"/cart"}>
         <i className="fa-solid fa-cart-shopping carrito"></i>
     </Link>
     <Link className='cartCant' to={"/cart"}>{quantityCart}</Link>
    </>
  )
}

export default CartWidget
