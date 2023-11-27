import React, {useState, useEffect} from 'react'
import banner from '../assets/bannière.png'
import '../styles/Home.scss'

export default function Home() {
    const [width, setWidth] = useState(window.innerWidth) //hook changement d'état

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    console.log('width', width)
  return (
    <main>
        <div className='banner'>
            <img src={banner} alt='bannière'/>
            {width > 425 ? (     //rendu conditionnel if/else
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            ) : (
                <h1 className='banner-title'>Chez vous,<br></br> partout et ailleurs</h1>
            )}
        </div>
    </main>
  )
}
