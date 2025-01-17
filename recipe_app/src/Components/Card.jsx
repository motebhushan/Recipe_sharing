import './Component.css';
import Recipe_info from './Recipe_info';
import { useState } from 'react';

function Card({ id, image, title, description ,steps,ingrediants}) {
    const [active, setActive] = useState(false);

    const cardCon = () => {
        setActive(true);
    };

    const closeRecipeInfo = () => {
        setActive(false);
    };

    return (
        <>
            <div className={`card ${active ? 'blur' : ''}`} id={id} onClick={cardCon}>
                <div className="card-body">
                    <img className="image" src={image} alt={title} />
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-description">{description}</h6>
                </div>
            </div>
            {active && (
                <Recipe_info
                    image={image}
                    title={title}
                    description={description}
                    onClose={closeRecipeInfo}
                    steps={steps}
                    ingrediants={ingrediants}
                />
            )}
        </>
    );
}

export default Card;
