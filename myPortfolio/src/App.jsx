import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Contact from './pages/contact/Contact.jsx'
import Github from './pages/github/Github.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'


function App() {
 

  return (
    <>
    <Navbar/>
    <img src="./assets/picture.jpg" alt="image" />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Github' element={<Github/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
      </Routes>
    </>
  )
}

export default App
