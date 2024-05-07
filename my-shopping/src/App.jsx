import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layouts/Header'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Categories from './components/pages/Categories'
import Brands from './components/pages/Brands'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
