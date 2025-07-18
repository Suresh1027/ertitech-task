import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import Register from './pages/Register'
import Dashboard from '../src/pages/Dashboard'
function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App