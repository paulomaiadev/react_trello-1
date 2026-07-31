import styles from './AdicionarTarefa.module.css'
import PrioridadeTarefa from './PrioridadeTarefa'

export default function AdicionarTarefa({
    button,
    texto,
    setTexto,
    prioridade,
    setPrioridade,
    onAdicionar,
}) {
    function handleSubmit(event) {
        event.preventDefault()

        const tarefa = texto.trim()
        if (!tarefa) return

        onAdicionar({ texto: tarefa, prioridade })
    }

    return (
        <section id="adicionar-tarefa" className={styles.root} aria-labelledby="adicionar-titulo">
            <h3 id="adicionar-titulo" className={styles.title}>Adicionar nova tarefa</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="input-tarefa">Nova tarefa</label>
                <input
                    className={styles.input}
                    type="text"
                    id="input-tarefa"
                    placeholder="Digite sua tarefa"
                    value={texto}
                    onChange={(event) => setTexto(event.target.value)}
                />
                <PrioridadeTarefa prioridade={prioridade} setPrioridade={setPrioridade} label="Prioridade" />
                <button className={styles.button} type="submit">{button}</button>
            </form>
        </section>
    )
}


