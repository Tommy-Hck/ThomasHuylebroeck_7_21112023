import React from 'react'
import "../Error/Error.scss"
import { Link } from 'react-router-dom'
import '../../styles/base.scss'

export default function Error() {
  return (
    <main>
      <section  className='error-container'>
        <div className='error-content'>
          <h1  className='error'>404</h1>
          <p className='not-found'>Oups! La page que vous demandez n'existe pas</p>   
        </div>
        <div className='home-link'> 
          <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
        </section>
    </main>
  )
}