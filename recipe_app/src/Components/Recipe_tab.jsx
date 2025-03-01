import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Component.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Card from "./Card";

function RecipeTab() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get("http://localhost:3000/recipe");
                console.log("API Response:", response.data);

                if (response.data?.status && Array.isArray(response.data.data)) {
                    setCards(response.data.data);
                } else {
                    console.error("Unexpected API response:", response.data);
                    setCards([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.response?.data?.message || "Failed to fetch recipes");
                setCards([]);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <Link to="/Save_recipe" className="addRecipeBtn">+ Add Recipe</Link>

                {loading && <p className="loading-text">Loading recipes...</p>}
                {error && <p className="error-text">Error: {error}</p>}

                <div className="cardContainer">
                    {cards.length > 0 ? (
                        cards.map((card) => (
                            <Card
                                key={card._id}
                                id={card._id}
                                image={card.imageUrl || "https://picsum.photos/300/200"}
                                title={card.title}
                                description={card.description}
                                steps={card.steps}
                                ingredients={card.ingredients}
                            />
                        ))
                    ) : (
                        !loading && <p className="no-recipes">No recipes found. Add one!</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default RecipeTab;
