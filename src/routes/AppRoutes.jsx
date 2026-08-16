import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Sobre from '../pages/Sobre'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import RotaPrivada from '../components/RotaPrivada'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<RotaPrivada><Dashboard /></RotaPrivada>} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes