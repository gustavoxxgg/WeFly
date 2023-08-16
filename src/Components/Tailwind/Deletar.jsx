import React, { useState } from 'react';
import axios from 'axios';

const Deletar = () => {
    const [email, setEmail] = useState('');

    const deleteUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get("http://localhost:8080/users");
            const user = res.data.find(user => user.email === email);

            if (user) {
                await axios.delete(`http://localhost:8080/delete/${user.id}`);
                alert(`Usuário com o id "${user.id}" foi deletado com sucesso`);
            } else {
                alert('Usuário não encontrado');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-400">
            <div className="bg-white p-16 rounded shadow-2xl w-2/3">
                <h2 className="text-3xl font-bold mb-10 text-gray-800">Delete sua conta</h2>
                <form onSubmit={deleteUser}>
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Email:</label>
                        <input 
                            type="email" 
                            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <button type="submit" className="block w-full p-4 rounded-lg font-bold text-white bg-red-500 hover:bg-red-400">
                        Delete sua conta
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Deletar;
