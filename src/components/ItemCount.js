import { useState } from 'react';

const ItemCount = ({stock}) => {
    
    const [initialItem, setInitialItem] = useState(1);
      
    const sumar = () => {
        initialItem < stock ? setInitialItem(initialItem + 1) : alert('Se alcanzo el maximo')
    };

    const restar = () => {
        initialItem > 0 ? setInitialItem(initialItem - 1) : alert('No se pueden introducir valores negativos')
    };

    return (

        <div className="spinner">    
            <button onClick={restar} className="botonera">-</button>
            <div className='texto1'> {initialItem} </div>  
            <button onClick={sumar} className="botonera">+</button>
        </div>
    )
}

export default ItemCount