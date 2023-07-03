const mongoose = require("mongoose"); 

const commentSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });

const recipeSchema = new mongoose.Schema({
    dishName: {
        type: String, 
        required: true
    },

    ingredients: {
        type: String,
        required: true
    },

    instructions: {
        type: String, 
        required: true
    },
    
    createdAt: {
        type: Date, 
        default: Date.now
    },

    comments: [commentSchema]
})

module.exports = mongoose.model("Recipe", recipeSchema);