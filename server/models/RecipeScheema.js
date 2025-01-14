const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Recipe title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Recipe description is required'],
    },
    ingredients: [
        {
          name: { type: String, required: true },
          quantity: { type: String, required: true },
        },
      ],
      steps: {
        type: [String], // Array of strings
        required: [true, 'Steps are required'],
      },
    photo: {
      type: String, 
     
    },
  },
  {
    timestamps: true,  
  }
);

// Model definition
const RecipeScheema = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeScheema;
