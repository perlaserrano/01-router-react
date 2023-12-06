import React from 'react'
import { Route , Routes, Navigate } from 'react-router-dom'
import ManScreen from '../pages/ManScreen'
import WomanScreen from '../pages/WomanScreen'
import SearchScreen from '../pages/SearchScreen'
import Navbar from '../components/Navbar'
import CharacterScreen from '../pages/CharacterScreen'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route end path="/man" element={<ManScreen/>}/>
        <Route end path="/woman" element={<WomanScreen/>}/>
        <Route end path="/search" element={<SearchScreen/>}/>
        <Route end path="/character/:id" element={<CharacterScreen/>}/>
           
         <Route path='*' element={<Navigate to="/man"/>}/>  
        
    </Routes>
      
    </>
  )
}

export default AppRouter
