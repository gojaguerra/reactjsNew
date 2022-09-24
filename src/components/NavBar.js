/* import React from 'react' */
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import logo from '../frangue.png'


function NavBar(props) {
    const { cart } = useContext(CartContext);
    const quantityCart = cart.reduce((acumulador, cantidad) => acumulador + cantidad.quantity, 0);

  return (<>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img src={logo}
                className="d-inline-block align-top App-logo"
                alt="React Bootstrap logo1"
            />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to={"/"}>Bettert Call Frangue</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Features</Nav.Link>
              <Nav.Link as={Link} to={"/"}>Pricing</Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item href="/category/hogar">Hogar</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to={"/category/hogar"}>Hogar</NavDropdown.Item>
                {/* <NavDropdown.Item href="/category/industria">Industria</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to={"/category/industria"}>Industria</NavDropdown.Item>
                {/* <NavDropdown.Item href="/category/otras">Otras Categorias</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to={"/category/otras"}>Otras Categorias</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
{/*             <Nav>
              <img className='w-25' height='65' src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='Imagen carrito'/>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
            { (quantityCart>0) && <CartWidget /> }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {children} */}
    </>
    );
  }

export default NavBar