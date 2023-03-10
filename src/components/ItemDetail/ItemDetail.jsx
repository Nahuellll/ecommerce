import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom';


// traemos la data con context, con useState modificamos la cantidad y link a /cart
export const ItemDetail = ({item})=>{
    const {addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (count)=>{
        addProduct(item,count);
        setQuantity(count);
    }

    return(
        <div className='detailContainer'>
            <p  className='titles1' style={{width: "100%"}}>Destino</p>
            <div className='imgContainer'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='imgContainer'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to="/cart">
                    <button className='buttonDetail'>Ir al carrito</button>
                </Link>
            }
        </div>
    )
}