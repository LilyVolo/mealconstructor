import React from 'react'

interface IngredientsFormProps {
    handleFetch: (ingredients: string[]) => void; // Типизация функции
  }


const IngredientsForm: React.FC<IngredientsFormProps> = ({ handleFetch }) => {
  const [ingredients, setIngredients] = React.useState<string[]>([''])
  
  function handleChange (index: number, value: string) {
      let changedArr: string[] = [...ingredients]
      changedArr[index] = value
      setIngredients(changedArr)
  }
  function onAddIngredient() {
    setIngredients([...ingredients, ''])
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault()
    const nonEmptyIngredients = ingredients.filter((ingredient) => ingredient.trim() !== '');
    handleFetch(nonEmptyIngredients);
    setIngredients([''])
  }

  return (
    <form onSubmit={handleSubmit}>
    { ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <label> {index+1}</label>
          <input
          type='text'
          value={ingredient}
          onChange={(e)=>handleChange(index, e.target.value)}
          />
        </div>
      )
    })}
    
        <button type='submit' className="px-6 py-3 text-white font-bold rounded-lg bg-[#9E99BF] hover:bg-[#857DA6] focus:ring-4 focus:ring-[#B4B0D0] shadow-md transition mr-3 mt-4">
          Get results</button>
        <button type='button' onClick={onAddIngredient} className="px-6 py-3 text-white font-bold rounded-lg bg-[#9E99BF] hover:bg-[#857DA6] focus:ring-4 focus:ring-[#B4B0D0] shadow-md transition  mt-4">
        Add one more ingredient</button>

</form>
  )
}

export default IngredientsForm