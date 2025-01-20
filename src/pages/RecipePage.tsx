import React from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
const apiKey = import.meta.env.VITE_APIKEY

interface Step {
  number: number;
  step: string;
}

interface RecipeInstruction {
  name: string;
  steps: Step[];
}

interface Summary {
    id: number;
    summary: string;
    title: string;
}

 const RecipePage: React.FC<RecipeInstruction> = () => {

  const [recipe, setRecipe] = React.useState<RecipeInstruction[] | null>(null)
  const [summary, setSummary] = React.useState<Summary | null >(null)

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    async function fetchOneRecepie () {
      try {
        const params = { apiKey: apiKey };
    
        const [instructionsResponse, summaryResponse] = await Promise.all([
          axios.get<RecipeInstruction[]>(
            `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
            { params }
          ),
          axios.get<Summary>(
            `https://api.spoonacular.com/recipes/${id}/summary`,
            { params }
          ),
        ]);
    
        setRecipe(instructionsResponse.data)
        setSummary(summaryResponse.data)
        console.log(summaryResponse.data, 'check')

      }  catch (error) {
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
        <h1>{summary?.title}</h1>
        <p>{summary?.summary}</p>
        {recipe[0]?.steps.map((step) => (
          <p key={step.number}>{`Step ${step.number}: ${step.step}`}</p>
        ))}
      </div>
    <Link to='/'>
    <button > Back </button>
    </Link>
    </div>
  )
}

export default RecipePage