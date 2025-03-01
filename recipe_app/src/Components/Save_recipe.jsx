import React, { useState } from "react";
import axios from "axios";
import "./Component.css";

function SaveRecipe() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        ingredients: "",
        steps: "",
        
    });

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

   
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    const handleImageChange = (e) => {
        setImage(e.target.files[0]); 
    };

    const addRecipe = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const recipeData = new FormData(); 
            recipeData.append("title", formData.title);
            recipeData.append("description", formData.description);
            recipeData.append("ingredients", formData.ingredients.split("\n").map(item => item.trim())); 
            recipeData.append("steps", formData.steps.split("\n").map(step => step.trim()));
            recipeData.append("image", image); 
 
            const response = await axios.post("http://localhost:3000/recipe", recipeData, {
                headers: { "Content-Type": "multipart/form-data" }
            });


            alert("✅ Recipe added successfully!");
            console.log("New Recipe:", response.data);

           
            setFormData({ title: "", description: "", ingredients: "", steps: "",image:"", });
            setImage(null);
        } catch (error) {
            console.error("Error adding recipe:", error);
            alert("❌ Failed to add recipe.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form" onSubmit={addRecipe}>
            <h2 className="form-title">Add a New Recipe</h2>

            <div className="input-group">
                <label htmlFor="title">Recipe Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Enter recipe title..." />
            </div>

            <div className="input-group">
                <label htmlFor="description">Short Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Write a short description..."></textarea>
            </div>

            <div className="input-group">
                <label htmlFor="ingredients">Ingredients (one per line)</label>
                <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} required placeholder="List ingredients..."></textarea>
            </div>

            <div className="input-group">
                <label htmlFor="steps">Steps (one per line)</label>
                <textarea name="steps" value={formData.steps} onChange={handleChange} required placeholder="Write the steps..."></textarea>
            </div>

            <div className="input-group">
                <label htmlFor="image">Upload Recipe Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} required />
            </div>

            <button className="saveBtn" type="submit" disabled={loading}>
                {loading ? "Saving..." : "Add Recipe"}
            </button>
        </form>
    );
}

export default SaveRecipe;
