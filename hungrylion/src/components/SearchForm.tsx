import { useState } from "preact/hooks";

const URL = "https://api.api-ninjas.com/v1/recipe?query=";
const HEADERS = {
    "X-Api-Key": "8yKT4nO5pY1XDqlR/cskvQ==H7FrMei3gbIeL5JO",
};

interface RecipeDetailsProps {
    recipe: {
        title: string;
        serving: string;
        ingredients: string;
        directions: string;
    };
}

export function SearchForm(setFoodData: any) {
    const [search, setSearch] = useState("");
    const [pending, setPending] = useState(false);

    const onSubmit = (e: Event) => {
        e.preventDefault();
        setPending(true);
        fetch(`${URL}${search}`, {
            method: "GET",
            headers: HEADERS,
        })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setFoodData(json);
                setPending(false);
            });
    };

    return (
        <form
            onSubmit={onSubmit}
            className="flex items-center flex-col gap-2.5">
            <label for="simple-search" className="sr-only">
                Search our index...
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border-2 border-gray-400 text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5 focus:border-cerulean outline-none transition-all"
                    placeholder="Search our index..."
                    required
                    value={search}
                    onChange={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        setSearch(target.value);
                    }}
                />
            </div>
            <button
                type="submit"
                className="px-6 py-1 my-4 text-lg text-white border-2 border-black rounded-full bg-cerulean">
                Find Recipes
            </button>
        </form>
    );
}
