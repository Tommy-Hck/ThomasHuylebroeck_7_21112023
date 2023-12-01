import React from 'react'
import Banner from '../assets/banniereAbout.png'
import '../assets/flècheBas.png'
import "../styles/About.scss"
import Collapse from '../components/collapse'

export default function About() {
  return (
    <main>
      <section>
        <div   className='banner'>
          <img src={Banner} alt='bannière'/>
        </div>
      </section>

       <section>
        <Collapse title="Titre 1" content="Contenu du collapsible 1" />
        <Collapse title="Titre 2" content="Contenu du collapsible 2" />
        <Collapse title="Titre 3" content="Contenu du collapsible 3" />
        <Collapse title="Titre 4" content="Contenu du collapsible 4" />

       </section>
        
    </main>
  )
}
