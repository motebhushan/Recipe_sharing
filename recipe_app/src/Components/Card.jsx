import './Component.css';
import RecipeInfo from './Recipe_info';  // Updated import name
import { useState } from 'react';

function Card({ id, image, title, description, steps, ingredients }) {
    const [active, setActive] = useState(false);

    const openRecipeInfo = () => {
        setActive(true);
    };

    const closeRecipeInfo = () => {
        setActive(false);
    };

    return (
        <>
            <div className={`card ${active ? 'blur' : ''}`} id={id} onClick={openRecipeInfo}>
                <div className="card-body">
                    <img className="image" src={"https://picsum.photos/300/200"} alt={title} />
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-description">{description}</h6>
                  
                </div>
            </div>
            {active && (
                <RecipeInfo
                    image={"https://picsum.photos/300/200"}
                    title={title}
                    description={description}
                    onClose={closeRecipeInfo}
                    steps={steps}
                    ingredients={ingredients}  
                    id={id}
                />
            )}
        </>
    );
}

export default Card;
