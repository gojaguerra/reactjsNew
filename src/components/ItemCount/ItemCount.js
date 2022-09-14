import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [initialItem, setInitialItem] = useState(initial);

  const sumar = () => {
        initialItem < stock
            ? setInitialItem(initialItem + 1) 
            : alert('Se alcanzo el máximo de stock del producto');
    };

    const restar = () => {
        initialItem > 0 
            ? setInitialItem(initialItem - 1) 
            : alert('No se pueden introducir valores negativos');
    };

    const handleOnAdd = () => {
        if (initialItem <= stock) onAdd(initialItem);
    };

  return (
    <div className="spinner">
        <Button className='btn bg-dark' onClick={sumar} disabled={initialItem>=stock} >+</Button>
        <Form.Text className='texto1'>{initialItem}</Form.Text>
        <Button className='btn bg-dark' onClick={restar} disabled={initialItem<1} >-</Button>
        <Button className='btn-primary btn-padding' onClick={handleOnAdd}>Agregar</Button>
    </div>
  );
};

export default ItemCount;