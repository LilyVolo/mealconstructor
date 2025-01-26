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


 const RecipePage: React.FC<RecipeInstruction> = () => {

  const [recipe, setRecipe] = React.useState<RecipeInstruction[] | null>(null)

  const [infoRecipe, setInfoRecipe] = React.useState<any>(null)

  const { id } = useParams<{ id: string }>();
  
  let summary;

  React.useEffect(() => {
    async function fetchOneRecepie () {
      try {
        const params = { apiKey: apiKey };
    
        const [instructionsResponse, infoRecipeResponse] = await Promise.all([
          axios.get<RecipeInstruction[]>(
            `https://api.spoonacular.com/recipes/${id}/analyzedInstructions`,
            { params }
          ),
          axios.get<any>(
            `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`,
            { params }
          ),
        ]);
    
        setRecipe(instructionsResponse.data)
        setInfoRecipe(infoRecipeResponse.data)

      }  catch (error) {
        alert('There is a problem with this recipe');
      }}
      fetchOneRecepie()
  }, [id])

  if (infoRecipe && infoRecipe.summary) {
    summary = infoRecipe.summary.replace(/<\/?[^>]+(>|$)/g, "");
    console.log(summary, 'check');
  } else {
    console.error('infoRecipe.summary is not available or valid:', infoRecipe);
  }


  if (!recipe || !infoRecipe) {
    return <div>Loading...</div>;
  }


  return (
    <div className='flex flex-col justify-center items-center pr-20 pl-20'>
  <h1>{infoRecipe.title}</h1>
       <div >
       
        <img src={infoRecipe.image} alt="" />
        
        <p>{summary}</p>
        {recipe[0]?.steps.map((step) => (
          <p key={step.number}>{`Step ${step.number}: ${step.step}`}</p>
        ))}
      </div>
    <Link to='/'>
    <button className="px-6 py-3 text-white font-bold rounded-lg bg-[#9E99BF] hover:bg-[#857DA6] focus:ring-4 focus:ring-[#B4B0D0] shadow-md transition">
    Back
</button>

    </Link>
    </div>
  )
}

export default RecipePage