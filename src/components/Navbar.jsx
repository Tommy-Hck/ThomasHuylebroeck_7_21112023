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
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>

                
            </ul>
        </div>
    </div>
    </nav>
  )
}
