import React,{useEffect} from 'react'

const Boton = () => {
useEffect(() => {
  console.log('hola me renderice')

  return () => {
   console.log('chau me voy.')
  }
}, [])


  return (
    <button>Realizar compra</button>
  )
}

export default Boton