import { useState } from "react"

import styles from './AdicionarTarefa.module.css';
import PrioridadeTarefa from "./PrioridadeTarefa";

export default function AdicionarTarefa({button, onAdicionar}){
    const [texto, setTexto] = useState('')
    const [prioridade, setPrioridade] = useState('media')

    function handleSubmit(event){
        event.preventDefault()

        const tarefa = texto.trim()
        if (!tarefa) return

        onAdicionar({ texto: tarefa, prioridade })
        setTexto('')
        setPrioridade('media')
    }

    return(
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
                <label className="prioridade-label">
                    Prioridade
                    <PrioridadeTarefa prioridade={prioridade} setPrioridade={setPrioridade}/>
                </label>
                <button className={styles.button} type='submit'>{button}</button>
            </form>
        </section>
    )
}


