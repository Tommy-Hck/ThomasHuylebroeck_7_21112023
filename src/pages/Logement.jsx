import React from 'react'
import { useParams, Link } from 'react-router-dom'
import homeData from "../assets/logements.json"
import "../styles/Logement.scss"

export default function Logement() {
    const {id} = useParams()
    const currentLogement = homeData.find((logement) => logement.id === id)
    console.log("id", id)
    if (!currentLogement) {
      return (
      <Link to="/Error"></Link>
    );
  } else{
  return (
    <main>
      <div className='carrousel'>
        <img className='photos' src={currentLogement.pictures[0]} alt="visuel du logement" />
      </div>

    <section className='description-container'>
      <div className='location'>
        <p className='quartier'>{currentLogement.title}</p>
      </div>
      <aside>
        <p className='owner'>{currentLogement.host.name}</p>
        <p className='gray-dot'></p>
        </aside>


    </section> 


    </main>
  )
}}
