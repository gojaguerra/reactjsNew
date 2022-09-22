import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer  from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './context/cartProvider';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <div className="aaApp-items" id="producto-contenedor">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="detail/:id" element={<ItemDetailContainer />} />
              <Route path="cart" element={<Cart />} />
              <Route path="category/:categoryName" element={<ItemListContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

