import React from 'react'
import '../styles/Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Header
