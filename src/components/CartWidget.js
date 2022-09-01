import React from 'react'

const CartWidget = (props) => {
  return (
    <>
    <i className="fa-solid fa-cart-shopping carrito"></i>
    <p>Carrito:{props.items}</p>
    </>
  )
}

export default CartWidget
