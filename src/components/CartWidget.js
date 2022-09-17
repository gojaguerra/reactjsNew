import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext"
import Nav from 'react-bootstrap/Nav'

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantityCart = cart.reduce((acumulador, cantidad) => acumulador + cantidad.quantity, 0);
  
   return (
    <>
     <Nav.Link href="/cart">
        <i className="fa-solid fa-cart-shopping carrito"></i>
     </Nav.Link>
     <Nav.Link href="/cart"> {quantityCart}</Nav.Link>
     </>
  )
}

export default CartWidget
