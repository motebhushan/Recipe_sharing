const express = require('express');
const route = express.Router();

// Import controllers
const { getAllData, getRecipe, addData, deleteRecipe }= require('../controllers/RecipeCon');  



route.get('/', getAllData);         
route.get('/:id', getRecipe);       
route.post('/', addData);           
route.delete('/:id', deleteRecipe); 

module.exports = route; 
