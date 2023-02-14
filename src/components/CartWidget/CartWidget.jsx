import Carrito from '../../assets/carrito.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


//obtenemos los productos y modificamos el contador
export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div>
            {
                productCartList.length>0 &&
                <>
                    <Link to="/cart">
                        <img src={Carrito} alt="carrito" style={{width:40}}/>
                    </Link>
                    <span style={{backgroundColor: 'violet', borderRadius:"40%", width:"19px", heigth:"15px", fontSize:"15px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
                </>
            }
        </div>
    )
}