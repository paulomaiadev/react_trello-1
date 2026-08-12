import './App.css'

//hooks
import {Routes, Route} from 'react-router-dom'
import { useAuth } from './context/AuthContext'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import RotaPrivada from './components/RotaPrivada'
import SideBar from './components/SideBar'


//Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Sobre from './pages/Sobre'
import Login from './pages/Login'

import AppRoutes from './routes/AppRoutes'


function App() {
  const { logado, setLogado } = useAuth()

  return (
      <div className="page-shell">
        <Header titulo="TaskFlow" subtitulo="Gerencie suas tarefas com mais organização." />
        {/* <Sidebar /> */} 

        <main id="app">
          <AppRoutes />

        </main>

        <Footer />
      </div>
  )
}

export default App
