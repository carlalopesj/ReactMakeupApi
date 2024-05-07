import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layouts/Header'
import Blush from './components/pages/Blush'

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/blush' element={<Blush />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
