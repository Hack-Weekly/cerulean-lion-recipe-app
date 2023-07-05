import { useState, useEffect } from 'preact/hooks';
import RecipeDetails from "./RecipeDetails"

const recipes = () => {
  const [Recipe,setRecipe] = useState([])

  const fetchData = async()=>{
   const response = await fetch("/api/recipe/");
   const data = await response.json();
   setRecipe(data)
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      {Recipe.map((recipe)=>(<RecipeDetails recipe={recipe} />))}
    </div>
    
  )
}

export default recipes

