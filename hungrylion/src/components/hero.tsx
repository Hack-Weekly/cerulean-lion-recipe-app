import Chef from "../assets/Chef.svg";
import { SearchForm } from "./SearchForm.tsx";
import { useState } from "preact/hooks";

interface RecipeDetailsProps {
  recipe: {
    title: string;
    serving: string;
    ingredients: string;
    directions: string;
  };
}

export default function Hero() {
  const [foodData, setFoodData] = useState({});

  const modifyFoodData = (data: RecipeDetailsProps) => {
    setFoodData(data);
  };

  return (
    <div className="container flex items-center justify-center w-full mx-auto pt-9">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-6xl font-bold">Hungry? We got you.</h1>
        </div>
        <div>
          <h3 className="text-3xl text-center">
            Find your next meal with Hungry Lion.
          </h3>
        </div>
        <div>
          <SearchForm setFoodData={modifyFoodData} />
        </div>
      </div>
      <div>
        <img src={Chef} />
      </div>
    </div>
  );
}
