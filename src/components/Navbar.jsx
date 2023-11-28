import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/Layout.scss'

export default function Navbar() {
  return (
    <nav>
    <div className='nav-wrapper'>
        <img src={logo} alt="logo" className="brand-logo"/>
        <div className='nav-link'>
            <ul>
                <li>
                    <a href='/'>Accueil</a>
                </li>
                <li>
                    <a href='/about'>A propos</a>
                </li>

                
            </ul>
        </div>
    </div>
    </nav>
  )
}
