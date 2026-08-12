import { createContext, useContext, useState, useEffect } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(() => {
    // Tenta recuperar do localStorage na primeira renderização
    return localStorage.getItem('logado') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('logado', logado)
  }, [logado])

  // Função de login — chama setLogado(true)

  function login() { setLogado(true); }

  // Função de logout — chama setLogado(false)

  function logout() { setLogado(false); }

    return (
      <AuthContext.Provider value={{ logado, setLogado }}>
        {children}
      </AuthContext.Provider>
    ) 

}

export function useAuth() {

  const context = useContext(AuthContext);

  // Erro claro se usado fora do AuthProvider

  if (!context) {

    throw new Error('useAuth deve ser usado dentro do AuthProvider');

  }

  return context; // { logado, login, logout }
}