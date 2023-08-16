import React, { useState, useEffect } from 'react';
import './css/Cadastro.css'
import image from '../../Assets/loginf.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        console.log(isLoggedIn);
    }, [isLoggedIn]);

    const login = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.text();

        if (response.status === 200) {
            setIsLoggedIn(true);
            alert('Login bem-sucedido!');
            navigate("/");
        } else {
            alert(`Falha no login: ${data}`);
        }
    };


    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8">
                    <h2 className="font-bold text-2xl text-blue-600">Login</h2>
                    <p className="text-sm mt-4 text-blue-900"> Se você já é um membro faça o seu login</p>
                    <form action="" className="flex flex-col gap-4">
                        <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type={isPasswordVisible ? 'text' : 'password'} name="senha" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsPasswordVisible(!isPasswordVisible)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute top-1/2 right-3 -translate-y-1/2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <button type='button' onClick={login} className="bg-blue-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                    </form>
                    <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
                        <hr className="border-gray-500" />
                        <p className="text-center text">Ou se Preferir</p>
                        <hr className="border-gray-500" />
                    </div>
                    <div>
                        <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                            </svg> Fazer login com o Google
                        </button>
                        <div className="mt-5 text-xs border-b border-gray-400 py-4 text-center">Esqueceu a sua senha ?</div>
                        <div className="mt-3 text-xs flex justify-between items-center">
                            <p>Ainda não é registrado?</p>
                            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Registre-se</button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 md:block hidden">
                    <img className="rounded-2xl" src={image} alt="foto de avião" />
                </div>
            </div>

            <div className="fixed top-0 left-0 m-20">
                <Link to="/">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Voltar a página inicial  
                </button>
                </Link>
            </div> 

        </section>
        
    );
}

export default LoginPage;
