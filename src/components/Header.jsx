import styles from './Header.module.css'

export default function Header({ titulo, subtitulo }) {
    return (
        <header className={styles.siteHeader}>
            <div className={styles.brand}>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </div>
            <nav className={styles.nav} aria-label="Navegação principal">
                <a className={styles.link} href="#tarefas">Tarefas</a>
                <a className={styles.link} href="#adicionar-tarefa">Adicionar</a>
                <a className={styles.link} href="#sobre">Sobre</a>
            </nav>
        </header>
    )
}