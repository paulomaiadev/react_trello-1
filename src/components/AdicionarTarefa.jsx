import { useState } from 'react'
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
    const [cep, setCep] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const tarefa = texto.trim()
        if (!tarefa) return

        await onAdicionar({ texto: tarefa, prioridade, cep })
        setCep('')
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

                <label className="sr-only" htmlFor="input-cep">CEP (opcional)</label>
                <input
                    className={styles.input}
                    type="text"
                    id="input-cep"
                    placeholder="CEP (opcional)"
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    maxLength={9}
                />

                <PrioridadeTarefa prioridade={prioridade} setPrioridade={setPrioridade} label="Prioridade" />
                <button className={styles.button} type="submit">{button}</button>
            </form>
        </section>
    )
}


