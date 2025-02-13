import React, { useState } from "react";
import axios from "axios";
import "./Component.css";

function SaveRecipe() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        ingredients: "",
        steps: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addRecipe = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3000/recipe", {
                title: formData.title,
                description: formData.description,
                ingredients: formData.ingredients.split("\n").map(item => item.trim()), 
                steps: formData.steps.split("\n").map(step => step.trim()) 
            });

            alert("✅ Recipe added successfully!");
            console.log("New Recipe:", response.data);

            // Reset form after successful submission
            setFormData({
                title: "",
                description: "",
                ingredients: "",
                steps: ""
            });
        } catch (error) {
            console.error("Error adding recipe:", error);
            alert("❌ Failed to add recipe.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form className="form" onSubmit={addRecipe}>
                <h2 className="form-title">Add a New Recipe</h2>

                <div className="input-group">
                    <label htmlFor="title">Recipe Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Enter recipe title..."
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="description">Short Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        placeholder="Write a short description..."
                    ></textarea>
                </div>

                <div className="input-group">
                    <label htmlFor="ingredients">Ingredients (one per line)</label>
                    <textarea
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleChange}
                        required
                        placeholder="List ingredients..."
                    ></textarea>
                </div>

                <div className="input-group">
                    <label htmlFor="steps">Steps (one per line)</label>
                    <textarea
                        name="steps"
                        value={formData.steps}
                        onChange={handleChange}
                        required
                        placeholder="Write the steps..."
                    ></textarea>
                </div>

                <button className="saveBtn" type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Add Recipe"}
                </button>
            </form>
        </>
    );
}

export default SaveRecipe;
