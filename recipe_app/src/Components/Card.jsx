import './Component.css';
import RecipeInfo from './Recipe_info';
import { useState } from 'react';

function Card({ id, image, title, description, steps, ingredients }) {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={`card ${active ? 'blur' : ''}`} id={id} onClick={() => setActive(true)}>
                <div className="card-body">
                    <img className="card-image" src={image} alt={title} />
                    <h5 className="card-title">{title}</h5>
                    <p className="card-description">{description}</p>
                </div>
            </div>

            {active && (
                <RecipeInfo
                    image={image}
                    title={title}
                    description={description}
                    onClose={() => setActive(false)}
                    steps={steps}
                    ingredients={ingredients}
                    id={id}
                />
            )}
        </>
    );
}

export default Card;
