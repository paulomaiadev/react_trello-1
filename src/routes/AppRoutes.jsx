import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Sobre from '../pages/Sobre';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

import RotaPrivada from '../components/RotaPrivada';

function AppRoutes({logado, setLogado}) {

    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<RotaPrivada logado={logado}> <Dashboard /> </RotaPrivada>} />
        <Route path="/login" element={ <Login onLogin={() => setLogado(true)} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Home />} />
        <Route path="/logout" element={<Logout onLogout={() => setLogado(false)} />} /> 
        
    </Routes>

    );
}
export default AppRoutes;