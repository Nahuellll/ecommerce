import { Item } from "../Item/Item"
import './ItemList.css';
/* import {Link} from 'react-router-dom';
 */

//lista de productos recorrida con metodo map
export const ItemList = ({items})=>{

    return(
        <div className="listaProd">
            <div className="titles" style={{width:"100%"}}>Viajes</div>
            {
                items.map(producto=>(
                    // <Link key={producto.id} to={`/item/${producto.id}`}>
                        <Item key={producto.id} item={producto}/>
                    // </Link>
                ))
            }
        </div>
    )
}