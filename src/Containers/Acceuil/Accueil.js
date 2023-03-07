import React from 'react'
import './Accueil.css'
import Cardfilm from '../../Components/Cardfilm/Cardfilm'

export default function Accueil() {
  return (
    <>
      <h1 className="titre-accueil">Tous les films</h1>
      <div className="container-cards">
        <Cardfilm>
            <h2>Hello Card</h2>
        </Cardfilm>
      </div>
    </>
  )
}
