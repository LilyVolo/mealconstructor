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
    
        <button type='submit'>Get results</button>
        <button type='button' onClick={onAddIngredient}>Add one more ingredient</button>

</form>
  )
}

export default IngredientsForm