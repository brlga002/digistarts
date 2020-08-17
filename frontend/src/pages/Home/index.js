import React, { useState } from 'react';
import { FiPlus, FiMinus, FiX, FiPercent } from 'react-icons/fi';
import { RiDivideLine } from 'react-icons/ri';

import api from '../../services/api';

import './styles.css';

export default function Home() {
  const [fistNumber, setFistNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [statusSeach, setStatusSeach] = useState('Online');
  const [load, setLoad] = useState(false);
  const [resultado, setResultado] = useState('');

  async function getResponseApi(route) {
    if (!load && fistNumber && secondNumber) {
      try {
        setLoad(true);
        setStatusSeach('Pesquisando...');
        const response = await api.post(route, {
          fistNumber,
          secondNumber,
        });
        setResultado(response.data);
        setStatusSeach('Respondido');
        setLoad(false);
      } catch (error) {
        setStatusSeach(
          'Ops! Ocorreu um erro: ' + error.response.data.message || error
        );
        setLoad(false);
      }
    } else {
      alert('Preencha os dois campos');
    }
  }

  function handleSoma() {
    getResponseApi('soma');
  }

  function handleSubtracao() {
    getResponseApi('subtracao');
  }

  function handleMultiplicacao() {
    getResponseApi('multiplicacao');
  }

  function handleDivisao() {
    getResponseApi('divisao');
  }

  function handleResto() {
    getResponseApi('resto');
  }

  function handleLimpar() {
    setFistNumber('');
    setSecondNumber('');
    setResultado('');
    setLoad(false);
    setStatusSeach('Online');
  }

  return (
    <div className="home-container">
      <div className="content">
        <form onSubmit={() => {}}>
          <section>
            <h1>Operações em números binários</h1>
          </section>
          <input
            placeholder="Primeiro número"
            value={fistNumber}
            onChange={(e) => setFistNumber(e.target.value)}
          />

          <input
            placeholder="Segundo número"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
          />

          <input
            placeholder="Resultado"
            value={resultado}
            onChange={() => {}}
          />

          {!load && (
            <div className="container-button">
              <button
                className="button"
                onClick={() => handleSoma()}
                type="button"
              >
                <FiPlus size={16} color="#FFF" />
              </button>
              <button
                className="button"
                onClick={() => handleSubtracao()}
                type="button"
              >
                <FiMinus size={16} color="#FFF" />
              </button>
              <button
                className="button"
                onClick={() => handleMultiplicacao()}
                type="button"
              >
                <FiX size={16} color="#FFF" />
              </button>
              <button
                className="button"
                onClick={() => handleDivisao()}
                type="button"
              >
                <RiDivideLine size={16} color="#FFF" />
              </button>
              <button
                className="button"
                onClick={() => handleResto()}
                type="button"
              >
                <FiPercent size={16} color="#FFF" />
              </button>
            </div>
          )}
          <button
            className="button"
            onClick={() => handleLimpar()}
            type="button"
          >
            Limpar
          </button>
          <p>Status: {statusSeach}</p>
        </form>
      </div>
    </div>
  );
}
