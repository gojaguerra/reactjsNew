import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Alerta(props) {
  const [showA, setShowA] = useState(true);
  
  const toggleShowA = () => {
    setShowA(!showA);
    
  }
  
/* console.log(props); */
  useEffect(() => {
    setShowA(true)
  }, []);

  return (
    <Row>
      <Col md={6} className="mb-2">
{/*         <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button> */}
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/30x30?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Tienda Frangue</strong>
            <small>nueva orden de compra!</small>
          </Toast.Header>
          <Toast.Body>{props.mensaje}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default Alerta;