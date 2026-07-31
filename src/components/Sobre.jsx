import styles from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id="sobre" className={styles.section} aria-labelledby="sobre-title">
            <h2 id="sobre-title" className={styles.title}>Sobre o TaskFlow</h2>
            <p className={styles.text}>Esta página organiza as tarefas em uma estrutura mais clara e acessível.</p>
        </section>
    )
}