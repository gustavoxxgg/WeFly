import React, {useEffect} from 'react'
import './home.css'
import video from '../../videos/aviao.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='home'>
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">

            <span data-Aos="fade-up" className="smallText">
              Nossos Pacotes
            </span>

            <h1 data-Aos="fade-up" className="homeTitle">
              Ache as suas férias
            </h1>

          </div>

          <div data-Aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="cidade">Selecione o seu destino:</label>
              <div className="input flex">
                <input type="text" placeholder='Coloque o Nome Aqui'/>
                <GrLocation className="icon"/>
              </div>
              </div>
              
              <div className="dateInpute">
              <label htmlFor="date">Selecione a sua data de partida:</label>
              <div className="input flex">
                <input type="date"/>
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Preço Máximo:</label>
                <h3 className="total">R$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
            </div>
            <div className="searchOptions flex">
              <HiFilter className="icon"/>
              <span>Aplicar Filtros</span>
            </div>
            </div>
          </div>
        

    </section>
  )
}

export default Home