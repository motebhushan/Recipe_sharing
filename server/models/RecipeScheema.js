const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Recipe title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Recipe description is required"],
      minlength: [10, "Description should be at least 10 characters long"],
    },
    ingredients: {
      type: [String], 
      required: [true, "Ingredients are required"],
      validate: {
        validator: (ingredients) => ingredients.length > 0,
        message: "At least one ingredient is required",
      },
    },
    steps: {
      type: [String], 
      required: [true, "Steps are required"],
      validate: {
        validator: (steps) => steps.length > 0,
        message: "At least one step is required",
      },
    },
    imageUrl: {
      type: String, 
      required: [true, "Recipe image is required"],
    },
  },
  {
    timestamps: true,
  }
);

const RecipeSchema = mongoose.model("Recipe", recipeSchema);

module.exports = RecipeSchema;
