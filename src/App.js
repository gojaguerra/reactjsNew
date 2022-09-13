import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer  from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";

function App() {

  const stock = 10;
  const [items, setItems] = useState(0);

  return (
    <BrowserRouter>
      
      <div className="App">
        
        <header className="App-header">
          <Navbar items={items}/>
        </header>
        
        <div className="aaApp-items" id="producto-contenedor">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="detail/:id" element={<ItemDetailContainer />} />
          </Routes>
          {/* <ItemDetailContainer Saludo="(Detalle) - Bienvenidos a la Tienda Virtual" /> */}
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;
