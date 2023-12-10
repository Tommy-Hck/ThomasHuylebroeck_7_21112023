import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/Layout.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
    <div className='nav-wrapper'>
        <img src={logo} alt="logo" className="brand-logo"/>
        <div className='nav-link'>
            <ul>
                <li>
                    <NavLink to='/'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>A propos</NavLink>
                </li>

                
            </ul>
        </div>
    </div>
    </nav>
  )
}
