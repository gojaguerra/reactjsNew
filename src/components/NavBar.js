import logo from '../frangue.png'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className="Navegacion">
                <ul className="menu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="pages/productos.html">Productos</a></li>
                    <li><a href="pages/servicios.html">Servicios</a></li>
                    <li><a href="pages/contacto.html">Contacto</a></li>
                    <li><a href="pages/trabajos.html">Clientes</a></li>
                    <li><a href="pages/quienes-somos.html">Quienes Somos</a></li>
                </ul>
            </nav>
{/*             <nav>
                <button type="button" className="btn">Inicie Sesión</button>                                               
            </nav>
 */}            <CartWidget />
        </div>


)
};

export default NavBar;