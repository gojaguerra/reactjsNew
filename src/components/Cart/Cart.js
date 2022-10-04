import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import moment from "moment";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';
import FormOrder from "./FormOrder";
import FormData from "./FormData";

// MUESTRA EL CARRITO PARA PODER TERMINAR LA COMPRA

const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);
    const totalCart = cart.reduce((acumulador, items) => acumulador + (items.quantity*items.price), 0);
    const [idOrder, setIdOrder] = useState(false);
    const [updateOrder, setUpdateOrder] = useState(false);
    const navigate = useNavigate();
    const db = getFirestore();
    const [showForm, setShowForm] = useState(false);

    const [order, setOrder] = useState({
        buyer: {
            name: "",
            phone: "",
            email: ""
        },
        items: cart,
        total: cart.reduce((acumulador, items) => acumulador + (items.quantity*items.price), 0),
        date: moment().format('DD/MM/YYYY, h:mm:ss a'),       
    })

    const createOrder = () => {
        if(order.buyer.email==="" || order.buyer.phone==="" || order.buyer.name===""){
            // alert("complete los datos")
            setShowForm(true);
            return false
        } else {
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
        }

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

    const handleShowForm = () => {
        setShowForm(true);
        // console.log("me,",showForm);
    };

    useEffect(() => {
        // console.log("ue,",showForm);
      }, [showForm]);

    return (
        <div>
            <Link
                to={'/'} >
                <Button className='btn-warning'>Volver</Button>        
            </Link>
            { (!cart.length==0) && <Button onClick={createOrder}>Crear Orden</Button> }
            { (!cart.length==0) && <Button className='btn-warning' onClick={handleShowForm}>Mis Datos</Button> }
            <h1>Su carrito de compras</h1>
            { cart.length===0 ? (<h2>NO HAY PRODUCTOS</h2>) 
            : 
            (
                <>
                  <h3>TOTAL: ${totalCart}</h3>
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
                    {/* <Button onClick={createOrder}>Crear Orden</Button>
                    <Button className='btn-warning' onClick={handleShowForm}>Mis Datos</Button> */}
                    <br></br>
                    {/* <FormOrder order={order} setOrder={setOrder} /> */}
                    
                    {/* {showForm ? <FormData order={order} setOrder={setOrder} createOrder={createOrder} setShowForm={setShowForm} /> :
                    <FormData order={order} setOrder={setOrder} createOrder={createOrder} setShowForm={setShowForm} /> } */}
                    
                    { (showForm) && <FormData order={order} setOrder={setOrder} createOrder={createOrder} setShowForm={setShowForm} /> }
                    {/* {showForm && <FormOrder order={order} setOrder={setOrder} />} */}
                    
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

