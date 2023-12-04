import React from 'react'
import Banner from '../assets/banniereAbout.png'
import "../styles/About.scss"
import Collapse from '../components/collapse'
import Data from '../assets/about.json'

export default function About() {
  return (
    <main>
      <section>
        <div   className='banner'>
          <img src={Banner} alt='bannière'/>
        </div>
      </section>

       <section>
        {Data.map((rule) =>
          {
            return (
              <Collapse title={rule.title} content={rule.content} key={rule.id}/>
            )
          }
        )}
       </section>
        
    </main>
  )
}
