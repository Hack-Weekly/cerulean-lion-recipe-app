const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");

//post a recipe
router.post("/recipes", (req, res) => {
    const dishName = req.query.dishName; 
    const ingredients = req.query.ingredients; 
    const instructions = req.query.instructions;

    Recipe.create({dishName, ingredients, instructions})
        .then((result) => {
            res.status(201).send("Recipe created successfully");
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Error encountered in posting new recipe");
            
        })
});

//get all recipes
router.get("/recipes", (req, res) => {
    Recipe.find({})
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((error) => {
            console.error("Error encountered requesting recipe list");
        })
});

router.post("/searchRecipes", (req, res) => {
    const {dishName} = req.body
    Recipe.find({dishName: dishName})
        .then((posts) => {
            res.status(200).json(posts);
        })
        .catch((error) => {
            console.error("Error encountered searching recipe list");
        })
})

module.exports = router;