import React from 'react'
import { Link } from 'react-router-dom';
import './Component.css';
function Navbar() {
    const home = '/';
    const recipe = '/Recipe_tab';
  return (
    <>

    <nav className='navabar'>  
        <ul className='ul'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Recipe_tab">Recipes</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#">Contact</a></li>
            
        </ul>
    </nav>
    </>
  )
}

export default Navbar
