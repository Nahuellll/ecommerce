import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import logoMountain from '../../assets/logoMountain.jpg'
import {NavLink, Link} from 'react-router-dom';



//usamos link en el logo para redireccionar y navlink
export const Navbar = () =>{
    return(
        <nav className='navContainer'>
            <Link to="/">
                <div>
                    <img className="navBrand" src={logoMountain} alt="logo"/>
                </div>
            </Link>
            <div className='navLinks'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/Cordoba">Cordoba</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/Mendoza">Mendoza</NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/Otros">Otros</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
