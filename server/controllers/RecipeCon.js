const Recipe = require("../models/RecipeScheema");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage }).single("image");

// Add new recipe with image upload
const addData = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ status: false, message: "Image upload failed", error: err });
    }

    try {
      const { title, description, ingredients, steps } = req.body;
      if (!title || !description || !ingredients || !steps || !req.file) {
        return res.status(400).json({ status: false, message: "All fields and image are required." });
      }

      const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;  

      const newRecipe = new Recipe({ title, description, ingredients, steps, imageUrl });
      await newRecipe.save();

      res.status(201).json({ status: true, message: "Recipe added successfully", data: newRecipe });
    } catch (error) {
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  });
};

// Get all recipes
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

// Get a single recipe by ID
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

// Delete a recipe
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
