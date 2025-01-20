import Home from './pages/Home.tsx';
import RecipePage from'./pages/RecipePage.tsx'
import {Routes, Route } from "react-router-dom";

import './App.css'

function App() {
 
  return (
    <>
    <Routes>
    <Route path='/'element={<Home />}/>
    <Route path='/recipe/:id' element={<RecipePage/>}/>
    </Routes>
    </>
  )
}

export default App
