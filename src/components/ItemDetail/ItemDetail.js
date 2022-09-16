import React, { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
/* import Form from 'react-bootstrap/Form'; */
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import Nav from 'react-bootstrap/Nav'
import { CartContext } from '../../context/CartContext';

/* import { Link } from 'react-router-dom'; */
/* import { Navigate } from 'react-router-dom'; */

const ItemDetail = ({ data }) => {

  const { addToCart }=useContext(CartContext);
  const [estadoCarrito, setEstadoCarrito] = useState(false);
  const initial=1;
  const [initialItem, setInitialItem] = useState(initial);
    
  const handleOnAdd = (cantidad)=>{
    setEstadoCarrito(true);
    addToCart(data, cantidad);
    alert(`Se agrego ${cantidad} producto al carrito`);

  };
  const handleClick = () =>{
    /* Navigate("/cart"); */
    /* alert(`Se agrego ${initialItem} producto al carrito`); */

  };

  return (
    <>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${data.image}`}  />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>Precio: ${data.price}</Card.Text>
        {estadoCarrito===false?
          <ItemCount stock={data.stock} initial={1} onAdd={handleOnAdd} setInitialItem={setInitialItem} initialItem={initialItem}/>
        :
          <Nav.Link href="/cart">
              <Button className='btn-primary btn-padding' onClick={handleClick} disabled={initialItem<1} >Terminar Compra</Button>
          </Nav.Link>
        }
      </Card.Body>
      </Card>
    </>
  )
}

export default ItemDetail;