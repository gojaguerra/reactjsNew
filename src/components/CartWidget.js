import React from 'react'
import Nav from 'react-bootstrap/Nav'

const CartWidget = (props) => {
  return (
    <>
     <Nav.Link href="/cart">
        <i className="fa-solid fa-cart-shopping carrito"></i>
     </Nav.Link>
     <Nav.Link href="/cart"> {props.items}</Nav.Link>
     </>
  )
}

export default CartWidget
