import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Drink from './components/pages/Drinks'
import DrinkDetail from './components/pages/DrinkDetail'
import Home from './components/pages/Home'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/drinks/:type" element={ <Drink/> } />
        <Route path="/drinks/details/:id" element={ <DrinkDetail/> } />
    </Routes>
    </>
  )
}

export default App
