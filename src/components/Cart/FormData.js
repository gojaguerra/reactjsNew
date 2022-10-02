import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


function FormData() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { setOrder } = useContext(CartContext);

  const handleClose = (() => {
    setShow(false);
    navigate("/cart", { replace: true });
  });

  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow();
  }, []);
  

  return (
    <>
{/*       <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Ingresa tus datos</Modal.Title>
        </Modal.Header>
            
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label value="order.buyer.email">Email address</Form.Label>
                <Form.Control type="email" placeholder="ingresa tu email" />
                <Form.Text className="text-muted">
                Ingresa tu direccion de email para recibir los datos del envio.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control type="text" placeholder="ingresa tu apellido y nombre" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formTelefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="ingresa tu número de movil" />
            </Form.Group>

            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}

        </Form>


        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormData;
