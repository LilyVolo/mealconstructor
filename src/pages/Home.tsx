import React from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import IngredientsForm from '../components/IngredientsForm';
import RecipeBlock from '../components/RecipeBlock.tsx'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import '../App.css'

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
    <div className='mainLayOut'>
      <Header/>
      <div className="main-container flex flex-col justify-center items-center">
      <h1 className="text-3xl text-[#01260A] font-bold mb-10 ">
          Please, put down what you have in friedge</h1>
        <IngredientsForm handleFetch={handleFetch} />
        <div>
          {recipes.map((recipe, i) => (
            <RecipeBlock key={i} {...recipe} />
          ))}
        </div>
      </div>
        <Footer/>
    </div>
  );
  

 
}

export default Home