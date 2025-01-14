import './Component.css'
import Recipe_info from './Recipe_info';
import { useState } from 'react';
function Card ({ id,image, title, description }){
    const [selectedCard, setSelectedCard] = useState(null);
    const cardCon= (id) => {
        console.log(id);
        setSelectedCard(null);    
    };
    return (<>
    <div className="card" id={id} onClick={()=>cardCon(id)}>
        <div className="card-body">
            <img className="image" src={image}/>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-discription">{description}</h6> 
        </div>
       
    </div>
    </>)
}
export default Card