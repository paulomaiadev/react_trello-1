import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <h1>Bem-vindo ao TaskFlow!</h1>
            <p>Gerencie suas tarefas com mais organização.</p>
            <Link to="/login" className="btn">Entrar</Link>
            <Link to="/dashboard" className="btn">Minhas Tarefas</Link>
        </div>
    )
    }