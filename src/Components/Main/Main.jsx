import React, {useEffect} from 'react'
import './main.css'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Amsterdã',
    location: 'Holanda',
    grade: 'Canais Culturais ',
    fees: '600',
    description: 'Amsterdã é conhecida por sua arte, museus e rica história, além de uma animada vida noturna e relaxantes vias fluviais.'
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Roma',
    location: 'Itália',
    grade: 'História Antiga ',
    fees: '800',
    description: 'Roma, a capital da Itália, é uma cidade vibrante com uma rica história cultural e arquitetônica.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Tóquio',
    location: 'Japão',
    grade: 'Tradição Tecnológica ',
    fees: '1000',
    description: 'Tóquio é uma cidade agitada conhecida por sua modernidade, templos históricos e a torre Skytree.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cidade do Cabo',
    location: 'África do Sul',
    grade: 'Beleza Natural ',
    fees: '900',
    description: 'A Cidade do Cabo é famosa pela sua incrível vida selvagem, vinhedos e a bela Montanha da Mesa.'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Barcelona',
    location: 'Espanha',
    grade: 'Arte Praiana ',
    fees: '850',
    description: 'Barcelona é conhecida por sua arquitetura distinta, gastronomia vibrante e a famosa equipe de futebol.'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Rio de Janeiro',
    location: 'Brasil',
    grade: 'Carnaval Tropical ',
    fees: '750',
    description: 'O Rio de Janeiro é famoso por suas praias deslumbrantes, a estátua do Cristo Redentor e o vibrante Carnaval.'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Nova York',
    location: 'Estados Unidos',
    grade: 'Metropole Cultural ',
    fees: '950',
    description: 'Nova York, a cidade que nunca dorme, é conhecida por sua vida noturna vibrante, Times Square e a Estátua da Liberdade.'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Paris',
    location: 'França',
    grade: 'Romance Artístico ',
    fees: '1050',
    description: 'Paris, a cidade do amor, é famosa por seus cafés charmosos, a Torre Eiffel e o Louvre, o maior museu de arte do mundo.'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Sydney',
    location: 'Austrália',
    grade: 'Vida Oceânica ',
    fees: '1100',
    description: 'Sydney é conhecida pela sua deslumbrante Ópera de Sydney, Harbour Bridge e belas praias.'
  }
]

const Main = () => {

  const Random = () => {
    return Math.floor(Math.random() * 9) + 1;
  }

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='main container section'>

        <div className="secTitle">
          <h3 data-Aos="fade-right" className="title">
            Locais mais visitados
          </h3>
        </div>

        <div className="secContent grid">
          {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{

              return(
                <div key={id} data-Aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className='name'>{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+{Random()}</small></span>
                      </div>
                      <div className="price">
                        <h5>R$ {fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <Link to="/MetodoPagamento">
                    <button className='btn flex'>
                      Comprar Agora <HiOutlineClipboardCheck className="icon"/>
                    </button>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>

    </section>
  )
}

export default Main