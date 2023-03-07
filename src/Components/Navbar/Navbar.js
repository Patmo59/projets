import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

//! todo terminer le css de la Navbar
export default function Navbar() {
  return (
    <nav>
      <h5 className='.titre'>Allo-Movie</h5>
      <Link  to="/">Accueil</Link>
      <Link  to="/details" >Détails</Link>
      <Link  to="/favoris" >Favoris</Link>
    </nav>
  )
}
