import React from 'react'
import getFetch from '../../Data/data'
import { useState,useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = () => {
    
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        getFetch
        .then((response)=>setData(response))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
      },[])
  return (
  <>
    {
    loading?<span>Cargando...</span>:
    <ItemList products={data}></ItemList>
    }
  </>
)}

export default ItemListContainer