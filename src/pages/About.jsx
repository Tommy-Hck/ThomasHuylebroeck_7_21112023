import React from 'react'
import Banner from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).png'
import "../styles/About.scss"
import Collapse from '../components/collapse'
import Data from '../assets/about.json'

export default function About() {
  return (
    <main>
      <section>
        <div   className='banner'>
          <img className='image' src={Banner} alt='bannière'/>
        </div>
      </section>

       <section className='collapse-column'>
        {Data.map((rule) =>
          {
            return (
              <Collapse className="collapse" title={<h2 className='collapse-title'>{rule.title}</h2>} content={rule.content} key={rule.id}/>
            )
          }
        )}
       </section>
        
    </main>
  )
}
