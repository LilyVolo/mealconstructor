import React from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const apiKey = import.meta.env.VITE_APIKEY


 const RecipePage: React.FC = () => {

  const [recipe, setRecipe] = React.useState<any>(null)
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    async function fetchOneRecepie () {
      try {
        const params: { apiKey: string} = {
          apiKey: apiKey,
        }
        const { data } = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`
        , { params })
        setRecipe(data)
      
    console.log(data)

      } catch (error) {
        alert('There is a problem with this recipe');
      }}
      fetchOneRecepie ()
  }, [id])

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div>RecipePage</div>
       <div>
        {recipe[0]?.steps.map((step) => (
          <h1 key={step.number}>{`Step ${step.number}: ${step.step}`}</h1>
        ))}
      </div>
    <Link to='/'>
    <button > Back </button>
    </Link>
    </div>
  )
}

export default RecipePage