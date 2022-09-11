import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer  from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";

function App() {

  const stock = 10;
  const [items, setItems] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar items={items}/>
      </header>

      

      <div className="aaApp-items" id="producto-contenedor">
        {/* <ItemListContainer/> */}
        <ItemDetailContainer Saludo="(Detalle) - Bienvenidos a la Tienda Virtual" />
      </div>
    </div>
  );
}

export default App;
