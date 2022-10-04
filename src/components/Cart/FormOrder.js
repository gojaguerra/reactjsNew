import React from 'react'
import { Form } from 'react-bootstrap';

// FORMULARIO PARA LOS DATOS DE LA PERSONA QUE COMPRA - NO LO ESTOY USANDO

const FormOrder = ({order, setOrder}) => {

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]:e.target.value,
            },
        })

    };

  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
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
                <Form.Label>Teléfono</Form.Label>
                <Form.Control name="phone" type="text" placeholder="ingresa tu número de movil" value={order.buyer.phone} onChange={handleInputChange} />
            </Form.Group>

        </Form>
    </div>
  )
}

export default FormOrder;