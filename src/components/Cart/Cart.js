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
                            {/* <button onClick={() => removeItem(item.id)}>Eliminar</button> */}
                            <button class="boton-eliminar" onClick={() => removeItem(item.id)}><i class="fa-solid fa-trash-can"></i></button>

                           {/*  <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${item.image}`}  />
                            <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>Cantidad: {item.quantity}</Card.Text>
                            <Card.Text>Precio: ${item.price}</Card.Text>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                            </Card.Body>
                            </Card> */}
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

