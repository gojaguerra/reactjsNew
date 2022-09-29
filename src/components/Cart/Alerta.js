import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useNavigate } from "react-router-dom";


function Alerta(props) {
  const [showA, setShowA] = useState(true);
  
  let navigate = useNavigate();
  const toggleShowA = () => {
    setShowA(!showA);
    navigate("/", { replace: true });
    
  }
  
  useEffect(() => {
    setShowA(true)
  }, []);

  return (
      <ToastContainer className="p-3" position="middle-center">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Tienda Frangue</strong>
            <small>nueva orden de compra!</small>
          </Toast.Header>
          <Toast.Body>{props.mensaje}</Toast.Body>
        </Toast>
      </ToastContainer>
  );
}

export default Alerta;