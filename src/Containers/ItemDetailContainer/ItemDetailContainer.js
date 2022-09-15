import React from 'react'
// import logo from "../../logo.svg";
// import getFetch from '../../Data/data'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { Data } from '../../Data/data';

const ItemDetailContainer = ( {setItems} ) => {
  const { id } = useParams();
  const[data, setData] = useState([]);
  // const[loading, setLoading] = useState(true);

const getProduct = () => {

  const prodFiltro = Data.find((el) => el.id === id);
  setData(prodFiltro);
  
 };

useEffect(() => {
  getProduct();
}, []);

  return (
    <>
      <>
        {/* <h1 className="texto">{Saludo}</h1> */}
        <div className='card1'>
          <ItemDetail data={data} setItems={setItems}/>
        </div>  
      </>  
    </>
  );
};

export default ItemDetailContainer;