import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
      />
      <p className="text-gray-600 mb-4">{recipe.summary}</p>
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients ? (
          recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))
        ) : (
          <p className="text-gray-600">No ingredients available.</p>
        )}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Cooking instructions</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions ? (
          recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-600 mb-2">
              {step}
            </li>
          ))
        ) : (
          <p className="text-gray-600">No instructions available.</p>
        )}
      </ol>
    </div>
  );
}

export default RecipeDetail;
