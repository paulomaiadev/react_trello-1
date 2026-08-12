import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useAuth } from '../context/AuthContext'

export default function Header({ titulo, subtitulo }) {
    const { logado, logout } = useAuth();
    return (
        <header className={styles.siteHeader}>
            <div className={styles.brand}>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </div>
            <nav className={styles.nav} aria-label="Navegação principal">
                <Link to="/dashboard" className={styles.link}>Tarefas</Link>
                <Link to="/sobre" className={styles.link}>Sobre</Link>
                {logado ? ( 
                    <Link to="/logout" className={styles.link}>Logout</Link>
                ): (
                <Link to="/login" className={styles.link}>Login</Link>
                )}
                
            </nav>
        </header>
    )
}