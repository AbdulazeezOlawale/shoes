import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'
import NavBar from './components/NavBar'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <div className="nav-bar">
        <NavBar/>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    
  )
}

export default App
