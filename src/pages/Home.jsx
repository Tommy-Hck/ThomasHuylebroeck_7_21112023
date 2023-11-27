import React, {useState, useEffect} from 'react'
import banner from '../assets/bannière.png'
import '../styles/Home.scss'

export default function Home() {
    const [width, setWidth] = useState(window.innerWidth)
  return (
    <main>
        <div className='banner'>
            <img src={banner} alt='bannière'/>
            <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        </div>
    </main>
  )
}
