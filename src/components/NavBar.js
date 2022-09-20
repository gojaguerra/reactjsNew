import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget';
import logo from '../frangue.png'

//children==>parámetro desestructurado
function NavBar(props) {
    return (<>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo}
                /* width="30"
                height="30" */
                className="d-inline-block align-top App-logo"
                alt="React Bootstrap logo1"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">Bettert Call Frangue</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/category/hogar">Hogar</NavDropdown.Item>
                <NavDropdown.Item href="/category/industria">
                  Industria
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/otras">Otras Categorias</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
{/*             <Nav>
              <img className='w-25' height='65' src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='Imagen carrito'/>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {children} */}
    </>
    );
  }

export default NavBar