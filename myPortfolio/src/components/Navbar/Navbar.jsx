import React from 'react';
import './Navbar-style.css'
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
  
  <>
 
   
   <div className='main-navbar'>
    <div className='left-section' >
        <img className='nav-icon' src="/src/icon.jpg" alt="Icon"/>
        <h4 className='header-4'>Raj vishwakarma</h4>
    </div>
    <div className='right-section'>
      {/* <a href="/Home">Home</a>
      <a href="/About">About</a>
      <a href="/Portfolio">Portfolio/work</a>
      <a href="/Contact">Contact</a>
      <a className='highlight-btn' href="/Github">Github</a> */}
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Portfolio">Portfolio</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Github"><a className='highlight-btn' href="#">Github</a></Link>
    </div>
   </div>
   
  </>
  )
}

export default Navbar