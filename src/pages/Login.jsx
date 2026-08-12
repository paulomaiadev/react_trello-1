import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleLogin() {

        if (usuario === 'admin' && senha === '1234') {
            login(); // atualiza o estado no Context
            navigate('/dashboard', { replace: true }); // redireciona — chamado APÓS a ação
            return
        } 
        setErro('Usuário ou senha incorretos');

    }

    return (
        <div className='login-container'>

            <div className='login-card'>
                <h1 className='login-logo'>TaskFlow</h1>
                <p className='login-subtitulo'>Faça login para continuar</p>
                {/* Input de usuário — estado controlado */}

                <input className='login-input' type='text'

                placeholder='Usuário' value={usuario}

                onChange={e => setUsuario(e.target.value)} />

                {/* Input de senha — type='password' oculta os caracteres */}

                <input className='login-input' type='password'
                placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()} />

                {/* Mensagem de erro — renderização condicional com && */}

                <button onClick={handleLogin} className="login-btn">Entrar</button>
                {erro && <p className="login-erro">{erro}</p>}

                <p className='login-aviso'>
                    Este login é apenas para fins didáticos.
                    Credenciais reais vêm no módulo back-end.
                </p>

            </div>

        </div>

    );
    }