import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.js'
import './CartItem.css';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.title}</p>
                <p>Precio: {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio total:$ {item.totalPrice}</p>
                <button className='buttonDetail' onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}
