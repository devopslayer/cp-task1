// import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Details from './pages/Details'
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  )
}

export default App
