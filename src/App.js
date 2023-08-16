import React from 'react';
import './app.css'
import PagamentoInfo from './Components/Tailwind/PagamentoInfo';
import Cadastro from './Components/Tailwind/Cadastro';
import LoginPage from './Components/Tailwind/LoginPage';
import MetodoPagamento from './Components/Tailwind/MetodoPagamento';
import HomePage from './Components/Tailwind/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VooLayout from './voos';
import { AuthProvider } from './AuthContext';
import Deletar from './Components/Tailwind/Deletar';

const App = () => {
    return (
    <AuthProvider>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/MetodoPagamento" element={<MetodoPagamento/>} />
                <Route path="/InfPagamento" element={<PagamentoInfo/>} />
                <Route path="/Voos" element={<VooLayout/>} />
                <Route path="/Deletar" element={<Deletar/>} />
            </Routes>
        </Router>
    </AuthProvider>
    );
}

export default App;
