import React, { useState } from 'react';
import './css/Cadastro.css'
import { Link } from 'react-router-dom';


function PagamentoInfo() {

    const [cep, setCep] = useState("");
    const estadosBrasileiros = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
    const [credito, setCredito] = useState("");
    const [cvv, setCvv] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    const handleCep = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
        setCep(value);
    };

    const handleNumberInput = (e, setValue) => {
        const key = e.which || e.keyCode;
        if (key < 48 || key > 57) {
            e.preventDefault();
        } else {
            setValue(e.target.value);
        }
    };


    return (
        <div className="bg-gray-100 font-sans antialiased mb-4 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <form action="" className="mt-8 space-y-6 w-full max-w-lg bg-white shadow rounded-lg p-6">
                <div className="rounded-md shadow-sm -space-y-px">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                        Endereço de Pagamento
                    </h3>
                    <input type="text" name="nome" id="" placeholder="Seu Nome e Sobrenome" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                    <input type="email" name="email" id="" placeholder="Seu Email" required className="mt-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                    <input type="text" name="endereço" id="" placeholder="Insira seu Endereço" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                    <input type="text" name="Cidade" id="" placeholder="Insira sua Cidade" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                    <select name="Selecione Seu Estado" id="estado" class="mt-2 form-select block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Selecione Seu Estado</option>
                        {estadosBrasileiros.map((estado, index) => (
                            <option key={index} value={estado}>{estado}</option>
                        ))}
                    </select>
                    <input type="text" name="cep" id="cep" placeholder="Insira seu Cep" value={cep} onChange={handleCep} maxlength="9" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                </div>

                <div className="rounded-md shadow-sm -space-y-px mt-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                        Informações do Cartão
                    </h3>
                    <input type="text" name="nomecartao" id="" placeholder="Nome como está no Cartão" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
                    <input type="text" name="credito" id="credito" maxlength="16" value={credito} placeholder="Número do cartão de crétido" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={(e) => handleNumberInput(e, setCredito)}/>
                <input type="text" name="mesexp" id="mes" maxlength="2" value={mes} placeholder="Mês de vencimento" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={(e) => handleNumberInput(e, setMes)}/>
                <input type="text" name="anoexp" id="ano" maxlength="2" value={ano} placeholder="Ano de Vencimento" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={(e) => handleNumberInput(e, setAno)}/>
                <input type="text" name="cvv" maxlength="3" value={cvv} id="cvv" placeholder="Código de Segurança" required class="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={(e) => handleNumberInput(e, setCvv)}/>
                </div>
                
                <div>
                    <Link to="/">
                    <button type="submit" onClick={() => alert("Compra Realizada")}  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
                        Concluir Pagamento
                    </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default PagamentoInfo;
