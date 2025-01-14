const RecipeSchema = require('../models/RecipeScheema');

const addData = async (req, res) => {
  try {
    const { title, description, ingredients, steps, photo } = req.body;

    // Validate if all required fields are provided
    if (!title || !description || !ingredients || !steps || !photo) {
      return res.status(400).send({
        status: false,
        message: 'Request is not complete. All fields are required.',
      });
    }

    // Create a new recipe document
    const recipe = new RecipeSchema({
      title,
      description,
      ingredients,
      steps,
      photo
    });

    // Save the recipe to the database
    await recipe.save();

    res.status(201).send({
      status: true,
      message: 'Recipe added successfully',
      data: recipe,
    });
  } catch (err) {
    console.error('Error while adding recipe:', err.message);

    res.status(500).send({
      status: false,
      message: 'An error occurred while adding the recipe',
    });
  }
};

const getAllData = async (req, res) => {
  try {
    // Retrieve all recipes
    const data = await RecipeSchema.find();

    if (data.length === 0) {
      return res.status(404).send({
        status: false,
        message: 'No data found.',
      });
    }

    res.status(200).send({
      status: true,
      message: 'Data retrieved successfully.',
      data: data,
    });
  } catch (err) {
    console.error('Error while fetching data:', err.message);

    res.status(500).send({
      status: false,
      message: 'An error occurred while fetching data.',
    });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the recipe by ID
    const recipe = await RecipeSchema.findById(id);

    if (!recipe) {
      return res.status(404).send({
        status: false,
        message: 'Recipe not found.',
      });
    }

    res.status(200).send({
      status: true,
      message: 'Recipe retrieved successfully.',
      data: recipe,
    });
  } catch (err) {
    console.error('Error while fetching recipe:', err.message);

    res.status(500).send({
      status: false,
      message: 'An error occurred while fetching the recipe.',
    });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    // Attempt to delete the recipe by ID
    const deletedRecipe = await RecipeSchema.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).send({
        status: false,
        message: 'Recipe not found. Unable to delete.',
      });
    }

    res.status(200).send({
      status: true,
      message: 'Recipe deleted successfully.',
      data: deletedRecipe,
    });
  } catch (err) {
    console.error('Error while deleting recipe:', err.message);

    res.status(500).send({
      status: false,
      message: 'An error occurred while deleting the recipe.',
    });
  }
};

module.exports = { addData, getAllData, getRecipe, deleteRecipe };
