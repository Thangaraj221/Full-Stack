import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Skills from './Skills'
import {Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
      <Welcome name='virat'country='India'/>
      <Skills skill={['React','Node','Express','MangoDb']}/>
      <h1>Hello World</h1>
    </>
    
  )
}

export default App