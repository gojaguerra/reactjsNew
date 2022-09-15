import React from 'react'
// import { Button } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Item = ({data}) => {
    
/*     const[cantidad,setCantidad]=useState(1)

    const increment=()=>{
        setCantidad(actualValor=>actualValor+1)
    }

    const decrement=()=>{
        setCantidad(actualValor=>actualValor-1)
    } */
  
  return (
    <>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${data.image}`}  />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>Precio: ${data.price}</Card.Text>
      </Card.Body>
      </Card>
    </>
  )
}

export default Item


