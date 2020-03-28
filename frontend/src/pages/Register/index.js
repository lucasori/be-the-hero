// Importações

import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

export default function Register(){
    // Criando os estados para armazenar as informaçõs da ong
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    // Função responsável por cadastrar usuário
    async function handleRegister(e){
        e.preventDefault();

        const data ={
         name,
         email,
         whatsapp,
        city,
        uf,
        };

        try{ // Enviando os dados para api 
            const response = await api.post('ongs', data);
            
            // Acessando o id, enviando uma mensagem que foi criado
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err){
            // Caso seu cadastro não tenha feito, enviará essa mensagem
            alert('Erro no cadastro, tente novamente.');
        }
    }
       
    return (
      <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre a plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="Back-link" to="/register">
                    <FiArrowLeft size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
            </section>

            <form onSubmit={handleRegister}>
                <input placeholder="Nome da ONG"
                // Ouvindo os valores, inserindo na variável name
                value={name}
                onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="E-mail"
                // Ouvindo os valores, inserindo na variável email
                value={email}
                onChange={e => setEmail(e.target.value)} />
                <input placeholder="whatsapp" 
                // Ouvindo os valores, inserindo na variável whatsapp
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}/>

                <div className="input-group">
                    <input placeholder="Cidade"
                    // Ouvindo os valores, inserindo na variável city
                    value={city}
                    onChange={e => setCity(e.target.value)} />
                    <input placeholder="UF"
                     style={{ width: 80 }}
                    // Ouvindo os valores, inserindo na variável uf
                    value={uf}
                    onChange={e => setUf(e.target.value)} />
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
      </div>  
    );
}