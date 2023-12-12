import React from 'react'
import logo from '../../assets/logoFooter.png'
import '../Layout/Layout.scss'

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <img className='logo' src={logo} alt='logo'></img>
        <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
