import {useNavigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import styles from './Logout.module.css'


export default function Logout({ onLogout }) {

    const navigate = useNavigate();

    const handleLogout = () => {

        onLogout();
        navigate('/');

    };

    return (
        <button onClick={handleLogout} className={styles.link}>
            Sair
        </button>
    );
}