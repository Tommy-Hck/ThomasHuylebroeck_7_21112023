import React from 'react'
import "../styles/About.scss"
import { Link } from 'react-router-dom'
import Collapse from '../components/collapse'

export default function About() {
  return (
    <main>
      <section  className='error-container'>
        <div className='error-content'>
          <p  className='error'>404</p>
          <p className='not-found'>Oups! La page que vous demandez n'existe pas</p>   
        </div>
        <div className='home-link'> 
          <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
        </section>
    </main>
  )
}
