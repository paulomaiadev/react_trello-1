import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar() {

    const linkClass = ({ isActive }) =>
    isActive ? styles.link + ' ' + styles.ativo : styles.link;

    return (

        <aside className={styles.sidebar}>

            <div className={styles.logo}>

            <h1>TaskFlow</h1>

            </div>

            <nav className={styles.nav}>

                <NavLink to='/dashboard' className={linkClass}>Dashboard</NavLink>

                <NavLink to='/sobre' className={linkClass}>Sobre</NavLink>

            </nav>

        </aside>

    );

}

export default Sidebar;