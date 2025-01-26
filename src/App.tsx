import Home from './pages/Home.tsx'
import RecipePage from'./pages/RecipePage.tsx'
import {Routes, Route } from "react-router-dom"
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

import './App.css'

function App() {
 
  return (
    <>
    <Header/>

    <Routes>
    <Route path='/'element={<Home />}/>
    <Route path='/recipe/:id' element={<RecipePage/>}/>
    </Routes>

    <Footer/>
    </>

  )
}

export default App
