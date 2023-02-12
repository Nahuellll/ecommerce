import './Item.css';
import {Link} from 'react-router-dom';

//card con los link a detalles e item
export const Item = ({item})=>{
    return(
        <div className="cardProduct">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className='buttonDetail'>Ver mas...</button>
            </Link>
        </div>
    )
}