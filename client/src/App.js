// import { Routes, Route, useNavigate } from 'react-router-dom'
import React from 'react';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Products/>
    </div>
  )
}

export default App