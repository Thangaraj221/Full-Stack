import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './skills.jsx'
import Welcome from './Welcome.jsx'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
    </Routes>
    <Welcome name="vis"/>
    <Skills skill={["javascript","nodejs","html","css"]}/>
    </>
  )
} 
export default App
