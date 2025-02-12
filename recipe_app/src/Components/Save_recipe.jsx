import React, { useState } from "react";
import axios from "axios";
import "./Component.css";

function Save_recipe() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        ingredients: "",
        steps: ""
    });

  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    const addRecipe = async (e) => {
        e.preventDefault();
        console.log(formData);
        
        try {
            const response = await axios.post("http://localhost:3000/recipe", {
                
                title: formData.title,
                description: formData.description,
                ingredients: formData.ingredients.split("\n").map(item => item.trim()), 
                steps: formData.steps.split("\n").map(step => step.trim()) 
            });

            alert("Recipe added successfully!");
            console.log("New Recipe:", response.data);

           
            setFormData({
                title: "",
                description: "",
                ingredients: "",
                steps: ""
            });
        } catch (error) {
            console.error("Error adding recipe:", error);
            alert("Failed to add recipe.");
        }
    };

    return (
        <>
            <h2>Add New Recipe</h2>
            <form className="form" id="form1" onSubmit={addRecipe}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        cols={20}
                        rows={3}
                        required
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="ingredients">Ingredients (one per line)</label>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        cols={20}
                        rows={5}
                        required
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="steps">Steps (one per line)</label>
                    <textarea
                        name="steps"
                        value={formData.steps}
                        onChange={handleChange}
                        cols={20}
                        rows={5}
                        required
                    ></textarea>
                </div>

                <button type="submit">Add Recipe</button>
            </form>
        </>
    );
}

export default Save_recipe;
