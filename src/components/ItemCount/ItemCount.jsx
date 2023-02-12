import {useState} from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }

    return(
        <div className='contadorContainer'>
            <p>Cupos disponibles: {stock}</p>
            <div className='containerControl'>
                <button disabled={stock===0} onClick={decrementar} className='botonCount'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={incrementar} className='botonCount'>+</button>
            </div>
            <button  disabled={stock === 0} className='buttonDetail' onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}