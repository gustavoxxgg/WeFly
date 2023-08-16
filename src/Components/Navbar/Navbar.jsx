import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import aviao from '../../Assets/avv.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
const [active, setActive] = useState('navBar')
const showNav = ()=> {
    setActive('navBar activeNavbar')
}

const removeNavbar = ()=> {
    setActive('navBar')
}
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <Link to="/" className="logo flex">
                    <h1><img src={aviao} className="icon"/> Pesquisa de Voos.</h1>
                </Link>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Página Inicial</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Login</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Cadastro</a>
                    </li>
                    <button className='btn'>
                        <a href="#">Compre Agora</a>
                    </button>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavBar">
                <TbGridDots className="icon"/>
            </div>
        </header>
    </section>
  )
}

export default Navbar