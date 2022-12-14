import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

  const { addToCart }=useContext(CartContext);
  const [estadoCarrito, setEstadoCarrito] = useState(false);
  const initial=1;
  const [initialItem, setInitialItem] = useState(initial);

  const { cart } = useContext(CartContext);
  const quantityCart = cart.reduce((acumulador, cantidad) => acumulador + cantidad.quantity, 0);
    
  const handleOnAdd = (cantidad)=>{
    setEstadoCarrito(addToCart(data, cantidad));
    };

  return (
    <>
    {/* <Link to={"/"}>Volver</Link> */}
    <Link
        to={'/'} >
        <Button className='btn-warning'>Volver</Button>        
     </Link>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${data.image}`}  />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>Precio: ${data.price}</Card.Text>
        <ItemCount stock={data.stock} initial={1} onAdd={handleOnAdd} setInitialItem={setInitialItem} initialItem={initialItem}/>
        {quantityCart>0 && 
          <Link
            to={'/cart'} >
            <Button className='btn-warning' >Terminar Comprar</Button>        
          </Link>  
        }
      </Card.Body>
      </Card>
    </>
  )
}

export default ItemDetail;