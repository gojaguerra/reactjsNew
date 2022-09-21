import React from 'react'
import getFetch from '../../Data/data'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList'
import { Data } from '../../Data/data';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {
    
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const { categoryName } = useParams();

    // console.log("category",categoryName);

    useEffect(()=>{
        getFetch
        .then((response)=>{
          if(categoryName){
            const dataFiltrada = Data.filter((item)=> item.category===categoryName);
            setData(dataFiltrada);
          }else{
            setData(response);
          }
        })
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      },[])


  return (
  <>
    {
    loading ? 
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    :
    <ItemList products={data} categoria={categoryName} ></ItemList>
    }
  </>
)}

export default ItemListContainer