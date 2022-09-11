import { useState } from "react";
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
      <Button className='btn-warning' onClick={restar}>
        -
      </Button>
      <div className="textoTilt"> {initialItem} </div>
      <Button className='btn-warning' onClick={sumar}>
        +
      </Button>
      <Button className='btn-warning' onClick={handleOnAdd}>Agregar al Carrito</Button>
    </div>
  );
};

export default ItemCount;