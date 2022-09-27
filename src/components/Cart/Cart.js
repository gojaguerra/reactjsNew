import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.price), 0);
console.log(totalCart);
    return (
        <div>
            <Link
                to={'/'} >
                <Button className='btn-warning'>Volver</Button>        
            </Link>
            <h1>Su carrito de compras</h1>
            { cart.length===0 ? (<h2>NO HAY PRODUCTOS</h2>) 
            : 
            (
                <>
                  <h3>TOTAL: ${totalCart}</h3>
                  <div className="modal-carrito">
                    {cart.map((item) => (
                        <div key={item.id} className="productoEnCarrito">
                            <img src={`${item.image}`} style={{ width: '7rem' }}></img>
                            <p>{item.name}</p>
                            <p>{item.quantity} unid.</p>
                            <p>${item.price}</p>
                            <p>${item.price*item.quantity}</p>
                            <button class="boton-eliminar" onClick={() => removeItem(item.id)}><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    ))}
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Cart;

