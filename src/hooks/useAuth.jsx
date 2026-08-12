import { useState, useEffect } from 'react'

export default function useAuth() {
    const [logado, setLogado] = useState(() => {
        return localStorage.getItem('logado') === 'true';
    })

    useEffect(() => {
        localStorage.setItem('logado', logado);
    }, [logado]);

    const logout = () => setLogado(false);

    return { logado, setLogado, logout };
}