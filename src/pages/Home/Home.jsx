import banner from '../../assets/bannière.png'
import '../Home/Home.scss'
import homeData from '../../assets/logements.json'
import '../../styles/Banner.scss'
import '../../styles/base.scss'

export default function Home() {

  return (
    <main>
        <div className='banner'>
            <img className='banner-picture' src={banner} alt='bannière'/>
                <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        </div>
        <section className='home-section'>

                <div className='container'>
                {homeData.map((home, index) => {
                    return (
                        <div className='home-card' key={home.id}>
                            <a href={`/logements/${home.id}`}>
                        <img className='logement-picture' src={home.cover} alt={home.title} />
                        <p className='home-title'>{home.title}</p>
                        </a>
                        </div>
                    )
                })}
                
            </div>
        
        </section>
    </main>
    
  )
}
