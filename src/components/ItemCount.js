import React, { useState } from 'react'

const ItemCount = (props) => {
    return (
        <>
            <div>Stock {props.stock}</div>
            <div className="spinner">
              <button onClick={props.sumar} className="botonera">+</button>
              <div className='texto1'> {props.items} </div>
              <button onClick={props.restar} className="botonera">-</button>
            </div>
        </>
    )
}

export default ItemCount