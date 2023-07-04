// interface RecipesProps {
//     title: string;
//     serving: string;
//     ingredients: string;
//     directions: string;
//   } 

// const props = {
//     title: "Ahi Poke Salad",
//     serving: "1 Serving",
//     ingredients: "1/2 c Canola oil, 2 Wheat-flour tortillas, 4 oz Fresh ahi filets-cubed, 1 tb Chopped onion, \
//                   1 tb Chopped green onion, 1 tb Fresh ogo; (edible seaweed), 2 tb Soy sauce, \
//                   1 ts Sesame oil, 1 Handful fresh salad greens, 1/2 c Cooked somen; (thin white wheat noodles)",
//     directions: "In a frying pan, heat the oil on medium heat. Fry the tortillas, one at a time, until \
//                  golden brown. Drain on paper towels. To prepare the fish, combine the onions, ogo, soy sauce \
//                  and sesame oil. Add the cubed fish to the sauce and mix well. The fish is served sashimi style \
//                  (not cooked). Assemble by layering, placing the tortilla on plate first, followed by the green, the \
//                  second tortilla, and somen. Place the fish and sauce on top. Serves 2."
//   }

  


interface RecipeDetailsProps {
    recipe: {
      title: string;
      serving: string;
      ingredients: string;
    directions: string;
    }
  }
  
  const RecipeDetails: preact.FunctionComponent<RecipeDetailsProps>  = ({recipe}) => {
    return (
        <div className=" ml-12 py-4 px-8">
    
        <div className=" w-8/12 py-6 px-8">
    
        <div className="font-bold text-2xl mb-5 text-blue-500">{recipe.title}</div>
        <div className="font-bold text-xl mb-5">{recipe.serving}</div>
        <div className="font-bold mb-4 text-base">{recipe.ingredients}</div>
        <div className="font-bold mb-9 text-base">{recipe.directions}</div>
        </div>
        </div>
    )
  }

export default RecipeDetails