import React, {useEffect, useContext} from 'react';
import './css/Cadastro.css'
import imagem1 from '../../Assets/Meu projeto.png'
import imagem2 from '../../Assets/Untitled.png';
import imagem3 from '../../Assets/Risco.png';
import imagem4 from '../../Assets/Traveller.png';
import nobru from '../../Assets/music/nobru.mp3'
import lobo from '../../Assets/music/lobo.mp3'
import kwanzas from '../../Assets/music/kwanzas.mp3'
import mensagem from '../../Assets/music/mensagem.mp3'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const HomePage = () => {

    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        console.log(isLoggedIn);
        const keys = [];
        const secret = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
        const playRandomSong = () => {
            const songs = [nobru, lobo, kwanzas, mensagem];
            const randomSong = songs[Math.floor(Math.random() * songs.length)];
            const audio = new Audio(randomSong);
            audio.volume=0.5
            audio.play();
        };
    
        const keydownHandler = (e) => {
          keys.push(e.key);
          if (keys.length > secret.length) {
            keys.shift();
          }
          if (keys.toString() === secret.toString()) {
            playRandomSong();
          }
        };

        window.addEventListener('keydown', keydownHandler);

        return () => {
            window.removeEventListener('keydown', keydownHandler);
          };
        }, [isLoggedIn]);

  return (
    <div className="px-64 py-6">
        <div className="flex items-center justify-between">
            <div>
                <img src={imagem1} alt="avião" className="h-1/3 w-1/3"/>
            </div>
            <div className="flex items-center space-x-12 z-50">
                <Link to="/voos" className="font-semibold" onClick={e => {
                    if (!isLoggedIn) {
                        e.preventDefault();
                        alert("Você precisa estar logado para acessar esta página.");
                    }
                }}>Voos</Link>
                <Link to="/login" className="font-semibold">Login</Link>
                <Link to="/Deletar" className="font-semibold">Deletar Usuário</Link>
                <Link to="/cadastro" className="border-2 px-4 py-1.5 rounded-md border-black font-semibold">Cadastre-se</Link>
                <div className="flex items-center">
                    <a href="#" className="font-semibold">PT-BR</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <img src={imagem2} className="w-[960px] h-[910px] absolute right-0 top-0" alt="Decoração de Fundo"/>
        </div>
        <div className="pt-60 flex items-center">
            <div className="w-[520px]">
                <div className="grid gap-4">
                    <div className="grid gap-4">
                        <span className="text-lime-500 font-bold text-2xl">
                            WeFly
                        </span>
                        <span className="font-bold text-6xl text-blue-500 z-50">
                            Vamos voar juntos
                        </span>
                        <img src={imagem3} className="object-fill top-[460px] left-[430px] h-[12px] w-[300px]" alt="Risco"/>
                    </div>
                    <div>
                        <span className="text-gray-600">
                            A WeFly é uma agência de viagens focada em proporcionar experiências memoráveis e personalizadas. Nosso objetivo é conectar pessoas a destinos incríveis com facilidade e confiança. Viaje conosco e explore o mundo de uma maneira nova e emocionante. 
                        </span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="px-4 py-2.5 rounded-md bg-lime-400 text-black">Descubra Mais</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="absolute top-20 right-40">
                    <img src={imagem4} alt="muie"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
