const footer = () => {
 
  return (
    <div className="container flex justify-evenly w-full bg-gray-300">
      <div className="box1 p-9">
      <p class="font-bold">Made with love by Cerulian Lion</p>
      <p class="text-center font-bold">&copy; 2023</p>
      </div>
      <div className="box2 p-3">
      <h4 class="font-bold">Directory</h4>
      <p className="underline"><a href="/recipes">Recipes</a></p>
      <p className="underline"><a href="/meal-of-the-day">Meal of the Day</a></p>
      <p className="underline"><a href="/cuisines">Cuisines</a></p>
      </div>

      </div>
  )
}

export default footer