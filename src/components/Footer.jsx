import React from 'react'
import logo from '../assets/logoFooter.png'
import '../styles/Layout.scss'

export default function Footer() {
  return (
    <footer>
        <img src={logo} alt='logo'></img>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
