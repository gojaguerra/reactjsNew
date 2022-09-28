import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
/* import Card from 'react-bootstrap/Card'; */
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from "moment";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);
    const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.price), 0);

    const createOrder = () => {
        const db = getFirestore();
        const orders = {
            buyer: {
                name: "Jose",
                phone: "2235065737",
                email: "gojaguerra@gmail.com"
            },
            items: cart,
            total: totalCart,
            date: moment().format(),
        };
        const query = collection(db, 'orders');
        addDoc(query, orders)
        .then((response) => {
            alert("Gracias por tu compra!")
            clear();
            })
        .catch(() => alert("Tu compra no pudo realizarse!"))
    };

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
                  <Button onClick={createOrder}>Crear Orden</Button>
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

