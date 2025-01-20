import React from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import IngredientsForm from '../components/IngredientsForm';
import RecipeBlock from '../components/RecipeBlock.tsx'


interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: [];
  unusedIngredients: [];
  usedIngredientCount: number;
  usedIngredients: [];
}


const apiKey = import.meta.env.VITE_APIKEY
const baseURL = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/findByIngredients',
});


const Home: React.FC = () => {

  const [recipes, setRecipes] = React.useState<Recipe[]>([])

  
  const handleFetch = async (ingredients: string[]) => {
 
    try {
      const params: { apiKey: string; ingredients: string } = {
        apiKey: apiKey,
        ingredients: ingredients.join(',+'),
      }
  
      const response = await baseURL.get('', { params });
  
      console.log("Response:", response.data);
      setRecipes(response.data);
    } catch (error) {
      console.error("Ошибка при запросе к API:", error);
    }
  }

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <IngredientsForm handleFetch={handleFetch} />
        <div>
          {recipes.map((recipe, i) => (
            <RecipeBlock key={i} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
  

 
}

export default Home