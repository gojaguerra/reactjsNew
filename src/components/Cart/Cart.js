import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);

    return (
        <div>
            <h1>CARRO</h1>
            {cart.length===0 ? (<h2>NO HAY PRODUCTOS</h2>) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <button onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </>
            )
            }
        </div>
    )
}

export default Cart;
