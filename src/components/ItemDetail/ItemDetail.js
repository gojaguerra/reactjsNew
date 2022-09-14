import React, { useState } from 'react'
/* import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'; */
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
    
  const handleOnAdd = (cantidad)=>{
    alert(`Se agrego ${cantidad} producto al carrito`);
    
};

  return (
    <>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${data.image}`}  />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>Precio: ${data.price}</Card.Text>
        <ItemCount stock={data.stock} initial={1} onAdd={handleOnAdd} />
{/*         <Button className='btn bg-dark' onClick={increment} disabled={cantidad>=data.stock} >+</Button>
        <Form.Text className='texto1'>{cantidad}</Form.Text>
        <Button className='btn bg-dark' onClick={decrement} disabled={cantidad<1} >-</Button>
        <Button className='btn-primary' onClick={()=>{console.log(`agregaste ${cantidad} producto/s`)}}>Agregar</Button> */}
      </Card.Body>
      </Card>
    </>
  )
}

export default ItemDetail;