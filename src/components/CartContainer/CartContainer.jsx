import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div>
      <p>Carrito</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button  className='buttonDetail' onClick={clearProductCartList}>Vaciar el carrito</button>
              <Link to="/">
                <button className='buttonDetail'>seguir comprando</button>
              </Link>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}
