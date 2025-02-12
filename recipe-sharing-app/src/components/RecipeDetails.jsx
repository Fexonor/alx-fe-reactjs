import  useRecipeStore  from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipeId = parseInt(id, 10); // Ensure ID is numeric
    const recipe = useRecipeStore((state) =>
      state.recipes.find((recipe) => recipe.id === recipeId)
    );
  
    if (!recipe) {
      return <p>Recipe not found!</p>;
    }
  
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipeId={recipeId} />
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    );
  };
  
  export default RecipeDetails;