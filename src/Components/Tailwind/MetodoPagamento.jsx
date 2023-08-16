import React from 'react';
import '../Tailwind/css/Cadastro.css';
import master from '../../Assets/SVG/logo_mastercard.svg';
import paypal from '../../Assets/SVG/logo_paypal.svg';
import pix from '../../Assets/SVG/logo_pix.svg';
import visa from '../../Assets/SVG/logo_visa.svg';
import check from '../../Assets/SVG/icon_check.svg';
import { Link } from 'react-router-dom';

function MetodoPagamento() {
    return (
        <div className="bg-gray-100">
            <section className="max-w-[1700px] mx-auto px-8 pt-20 my-[190px]">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-8 text-center">
                    Métodos de Pagamento
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                    {/* Mastercard */}
                    <label htmlFor="mastercard" className="relative w-full cursor-pointer">
                        <input className="peer hidden" type="radio" id="mastercard" name="pagamento"/>
                        <div className="caixapgt">
                            <img className="imagem-mastercard" src={master} alt="logo da mastercard"/>
                            <p className="pgtxt">Pagar com Mastercard</p>
                        </div>
                        <div className="checker">
                            <img src={check} alt=""/>
                        </div>
                    </label>

                    {/* Visa */}
                    <label htmlFor="visa" className="relative w-full cursor-pointer">
                        <input className="peer hidden" type="radio" id="visa" name="pagamento"/>
                        <div className="caixapgt">
                            <img className="imagem-mastercard" src={visa} alt="logo da visa"/>
                            <p className="pgtxt">Pagar com Visa</p>
                        </div>
                        <div className="checker">
                            <img src={check} alt=""/>
                        </div>
                    </label>

                    {/* Paypal */}
                    <label htmlFor="paypal" className="relative w-full cursor-pointer">
                        <input className="peer hidden" type="radio" id="paypal" name="pagamento"/>
                        <div className="caixapgt">
                            <img className="imagem-mastercard" src={paypal} alt="logo do paypal"/>
                            <p className="pgtxt">Pagar com Paypal</p>
                        </div>
                        <div className="checker">
                            <img src={check} alt=""/>
                        </div>
                    </label>

                    {/* Pix */}
                    <label htmlFor="pix" className="relative w-full cursor-pointer">
                        <input className="peer hidden" type="radio" id="pix" name="pagamento"/>
                        <div className="caixapgt">
                            <img className="imagem-mastercard" src={pix} alt="logo do pix"/>
                            <p className="pgtxt">Pagar com Pix</p>
                        </div>
                        <div className="checker">
                            <img src={check} alt=""/>
                        </div>
                    </label>
                </div>
            </section>
            <div className="fixed bottom-0 right-0 m-20">
                <Link to="/InfPagamento">
                <button className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                    Continuar para dados de Pagamento  
                </button>
                </Link>
            </div>
        </div>
    );
}

export default MetodoPagamento;
