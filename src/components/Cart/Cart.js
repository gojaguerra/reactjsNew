import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';
/* import Alerta from "../Cart/Alerta" */

const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);
    const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.price), 0);
    const [idOrder, setIdOrder] = useState(false);
    const [updateOrder, setUpdateOrder] = useState(false);
    const navigate = useNavigate();
    const db = getFirestore();

    const [order, setOrder] = useState({
        buyer: {
            name: "Jose",
            phone: "2235065737",
            email: "gojaguerra@gmail.com"
        },
        items: cart,
        total: cart.reduce((acumulador, items) => acumulador + (items.quantity*items.price), 0),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),       
    })

    const createOrder = () => {
        setUpdateOrder(true);
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then((response) => {
            setIdOrder(response.id);
            // alert("Gracias por tu compra! \nSu numero de orden es: "+response.id)
            /* clear(); */
            updateStockItems(response.id);
            /* navigate(`order/${response.id}`, { replace: true }); */
            })
        .catch(() => alert("Tu compra no pudo realizarse!"))
        .finally(()=>{
            setUpdateOrder(false);
        })

        const updateStockItems = (orderId) => {
            cart.forEach((element) => {
                const queryUpdate = doc(db, 'items', element.id );
                updateDoc(queryUpdate, {
                    stock: element.stock - element.quantity,})
                .then(() => {
                    if (cart[cart.length -1].id === element.id) {
                        navigate(`order/${orderId}`, { replace: true });
                    }
                    console.log('Stock Actualizado');
                })
                .catch(() => {console.log('Error al Actualizar el Stock');})
                });
        }; 

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
                    {/* <Link
                    to={'form'} >
                    <Button className='btn-warning'>KKKKKK</Button>        
                    </Link> */}
                  <div className="modal-carrito">
                    {cart.map((item) => (
                        <div key={item.id} className="productoEnCarrito">
                            <img src={`${item.image}`} style={{ width: '7rem' }} alt="imagen de producto"></img>
                            <p>{item.name}</p>
                            <p>{item.quantity} unid.</p>
                            <p>${item.price}</p>
                            <p>${item.price*item.quantity}</p>
                            <button className="boton-eliminar" onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    ))}
                    </div>
                </>
            )
            }
            
            { (updateOrder) && 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> 
            }

            {/* { (idOrder) && <Alerta mensaje={`Gracias por su compra. Su id de pedido es ${idOrder}`} /> } */}
            
        </div>
    )
}

export default Cart;

