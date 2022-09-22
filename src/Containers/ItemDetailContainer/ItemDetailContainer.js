import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import { Data } from '../../Data/data';
import { getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const[data, setData] = useState([]);
  

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
        <div className='card1'>
          <ItemDetail data={data} />
        </div>  
      </>  
    </>
  );
};

export default ItemDetailContainer;