import React, {useState, useEffect} from 'react'
import banner from '../assets/bannière.png'
import '../styles/Home.scss'
import homeData from '../assets/logements.json'

export default function Home() {
    const [width, setWidth] = useState(window.innerWidth) //hook changement d'état
    const [isShow, setIsShow] = useState(false)

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
        <section className='home-section'>

            {isShow === false ? (
                <div className='container'>
                {homeData
                .slice(0, 6) //afficher les image d'index 0 à 6
                .map((home, index) => {
                    return (
                        <div className='home-card' key={home.id}>
                            <a href={`/logements/${home.id}`}>
                        <img src={home.cover} alt={home.title} />
                        <p className='home-title'>{home.title}</p>
                        </a>
                        </div>
                    )
                })}
                <span className='btn btn-more'onClick={() => setIsShow(true)}>voir plus</span>
                
            </div>
            ):(
                <div className='container'>
                {homeData
                .map((home, index) => {
                    return (
                        <div className='home-card' key={home.id}>
                            <a href={`/logements/${home.id}`}>
                        <img src={home.cover} alt={home.title} />
                        <p className='home-title'>{home.title}</p>
                        </a>
                        </div>
                    )
                })}
                <span className='btn btn-less' onClick={() => setIsShow(false)}>voir moins</span>
            </div>
            )}
        
            

        </section>
    </main>
    
  )
}
