import "./Component.css";
import axios from "axios";

function RecipeInfo({ image, title, description, onClose, steps, ingredients, id }) {
    
    const delCard = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/recipe/${id}`);

            if (response.status === 200) {
                alert("Recipe deleted successfully!");
                onClose();  // Close modal after deletion
            }
        } catch (error) {
            console.error("Error deleting recipe:", error);
            alert("Failed to delete recipe.");
        }
    };

    return (
        <div className="recipe-overlay">
            <div className="recipe-card">
                <button className="close-btn" onClick={onClose} aria-label="Close">✖</button>
                
                {image && <img src={image} alt={title || "Recipe"} className="recipe-img" />}
                <h2 className="recipe-title">{title}</h2>
                <p className="recipe-desc">{description}</p>

                {ingredients.length > 0 && (
                    <>
                        <h3>Ingredients:</h3>
                        <ul className="recipe-list">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="recipe-item">{ingredient}</li>
                            ))}
                        </ul>
                    </>
                )}

                {steps.length > 0 && (
                    <>
                        <h3>Steps:</h3>
                        <ol className="recipe-list">
                            {steps.map((step, index) => (
                                <li key={index} className="recipe-item">{step}</li>
                            ))}
                        </ol>
                    </>
                )}
                
                <button className="btn-delete" onClick={delCard}>Delete Recipe</button>
            </div>
        </div>
    );
}

export default RecipeInfo;
