import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

// ES UN MODAL PARA PEDIR LOS DATOS DE ENVIO

const FormData = ({order, setOrder, createOrder, setShowForm}) => {
  
  const ToastIng = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  
  const handleInputChange = (e) => {
    setOrder({
        ...order,
        buyer: {
            ...order.buyer,
            [e.target.name]:e.target.value,
        },
    });

  };

  const handleClose = (() => {
    setShowForm(false);
    setShow(false);
    navigate("/cart", { replace: true });
  });

  const handleCloseOK = (() => {
    setShowForm(false);
    setShow(false);
    if(order.buyer.email==="" || order.buyer.phone==="" || order.buyer.name===""){
      ToastIng.fire({
        icon: "error",
        title: "Debe completar todos los campos!",
      });
    } else {
      createOrder();
    }
  });

  const handleShow = () => setShow(true);

  useEffect(() => {
    /* setShowForm(false) */
    handleShow();
  }, []);
  

  return (
    <>
      <Modal show={show} onHide={handleClose} >
        
        <Modal.Header closeButton>
          <Modal.Title>Ingresa tus datos</Modal.Title>
        </Modal.Header>
            
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="ingresa tu email" value={order.buyer.email} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                Ingresa tu direccion de email para recibir los datos del envio.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control name="name" type="text" placeholder="ingresa tu apellido y nombre" value={order.buyer.name} onChange={handleInputChange} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formTelefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control name="phone" type="text" placeholder="ingresa tu número de movil" value={order.buyer.phone} onChange={handleInputChange} />
            </Form.Group>

            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}

        </Form>


        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseOK}>
            Pedir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormData;