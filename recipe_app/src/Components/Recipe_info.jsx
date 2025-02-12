import './Component.css';
// import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
function Recipe_info({ image, title, description, onClose, steps, ingredients ,id}) {
    // const navigate = useNavigate();
    const delCard=async()=>{
        try {
            const response = await axios.delete(`http://localhost:3000/recipe/${id}`);

            if (response.status === 200) {
                alert("Recipe deleted successfully!");
                
                
            }
        } catch (error) {
            console.error("Error deleting recipe:", error);
            alert("Failed to delete recipe.");
        }
    }
    return (
        <div className="recipe-info-overlay">
            <button className="close-btn" onClick={onClose} aria-label="Close">
                &times;
            </button>
            <div className="recipe-info-content">
                {image && <img src={image} alt={title || "Recipe image"} />}
                <h5>{title}</h5>
                <p>{description}</p>

                {ingredients.length > 0 && (
                    <>
                        <h6>Ingredients:</h6>
                        <ul className="ingredients-list">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="ingredient-item">{ingredient}</li>
                            ))}
                        </ul>
                    </>
                )}

                {steps.length > 0 && (
                    <>
                        <h6>Steps:</h6>
                        <ol className="steps-list">
                            {steps.map((step, index) => (
                                <li key={index} className="step-item">{step}</li>
                            ))}
                        </ol>
                    </>
                )}
                 <button className='btn-del' onClick={delCard}>delete</button>
            </div>
           
        </div>
    );
}

export default Recipe_info;
