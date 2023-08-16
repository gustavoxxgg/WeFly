import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/oceano.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {FiChevronRight} from 'react-icons/fi'
import aviao from '../../Assets/avv.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-Aos="fade-up" className="text">
            <small>Mantenha o contato</small>
            <h2>Seu destino, nossa missão</h2>
          </div>

          <div className="inputDiv flex">
            <input data-Aos="fade-up" type="text" placeholder='Insira seu Email' />
            <button data-Aos="fade-up" className='btn flex' type='submit'>
                Enviar <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
              <img src={aviao} alt="" className='icon' /> Wefly
              </a>
            </div>

            <div data-Aos="fade-up" data-aos-duration="3000" className="footerParagraph">
            A WeFly é uma agência de viagens focada em proporcionar experiências memoráveis e personalizadas. Nosso objetivo é conectar pessoas a destinos incríveis com facilidade e confiança. Viaje conosco e explore o mundo de uma maneira nova e emocionante. WeFly: Seu destino, nossa missão.
            </div>
          </div>

        {/*  <div data-Aos="fade-up" data-aos-duration="4000" className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">
                Nossa Agência
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Serviços
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Seguro
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agencia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Turismo
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Pagamento
              </li>
              
            </div>
          </div> */}

          <div className="footerDiv flex">
            <small>© 2023 WeFly. Todos os direitos reservados. As informações neste site estão sujeitas a alterações sem aviso prévio.</small>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Footer