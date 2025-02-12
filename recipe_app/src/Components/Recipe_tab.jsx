import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Component.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Card from "./Card";

function Recipe_tab() {
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
                <button className="addRecipeBtn">
                    <Link to="/Save_recipe">Add Recipe</Link>
                </button>

                {loading && <p>Loading recipes...</p>}
                {error && <p>Error: {error}</p>}

                <div className="cardContainer">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            id={card._id}
                            image={"https://via.placeholder.com/300x200"}
                            title={card.title}
                            description={card.description}
                            steps={card.steps}
                            ingredients={card.ingredients}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Recipe_tab;
