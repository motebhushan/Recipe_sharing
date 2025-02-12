const express = require("express");
const { addData, getAllData, getRecipe, deleteRecipe } = require("../controllers/RecipeCon");

const router = express.Router();

router.post("/", addData); 
router.get("/", getAllData); 
router.get("/:id", getRecipe);
router.delete("/:id", deleteRecipe); 

module.exports = router;
