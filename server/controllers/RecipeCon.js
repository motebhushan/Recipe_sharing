const Recipe = require("../models/RecipeScheema");

const addData = async (req, res) => {
  try {
    const { title, description, ingredients, steps } = req.body;
    if (!title || !description || !ingredients || !steps) {
      return res.status(400).json({ status: false, message: "All fields are required." });
    }
    const newRecipe = new Recipe({ title, description, ingredients, steps });
    await newRecipe.save();
    res.status(201).json({ status: true, message: "Recipe added successfully", data: newRecipe });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

const getAllData = async (req, res) => {
  try {
    const data = await Recipe.find();
    if (!data.length) {
      return res.status(404).json({ status: false, message: "No data found." });
    }
    res.status(200).json({ status: true, message: "Data retrieved successfully.", data });
  } catch (error) {
    res.status(500).json({ status: false, message: "An error occurred while fetching data." });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ status: false, message: "Recipe not found." });
    }
    res.status(200).json({ status: true, message: "Recipe retrieved successfully.", data: recipe });
  } catch (error) {
    res.status(500).json({ status: false, message: "An error occurred while fetching the recipe." });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).json({ status: false, message: "Recipe not found. Unable to delete." });
    }
    res.status(200).json({ status: true, message: "Recipe deleted successfully.", data: deletedRecipe });
  } catch (error) {
    res.status(500).json({ status: false, message: "An error occurred while deleting the recipe." });
  }
};

module.exports = { addData, getAllData, getRecipe, deleteRecipe };
