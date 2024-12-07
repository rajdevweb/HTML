import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Github from './pages/github/Github.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
function App() {
  return (
    <>
    <div className='background-main-image'>
    <div id='main-background'>
    <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Github' element={<Github/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
      </Routes>  

          </div>
              </div>
       
    </>
  )
}

export default App
