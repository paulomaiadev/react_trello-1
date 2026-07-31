import styles from './ItemTarefas.module.css'
import PrioridadeTarefa from './PrioridadeTarefa'

export default function ItemTarefa({ tarefas = [], onConcluir, onExcluir, onAtualizarPrioridade }) {
    return (
        <ul className={styles.list}>
            {tarefas.map((tarefa) => {
                const itemClassName = `${styles.item} ${tarefa.concluida ? styles.itemCompleted : ''}`
                const textClassName = `${styles.text} ${tarefa.concluida ? styles.completedText : ''}`

                return (
                    <li key={tarefa.id} className={itemClassName}>
                        <div className={styles.content}>
                            <span className={textClassName}>{tarefa.texto}</span>
                            
                        </div>
                        <div className={styles.actions}>
                            <PrioridadeTarefa
                                prioridade={tarefa.prioridade}
                                setPrioridade={(novaPrioridade) => onAtualizarPrioridade?.(tarefa.id, novaPrioridade)}
                                label=""
                            />
                            <button type="button" className={`${styles.button} ${styles.primary}`} onClick={() => onConcluir(tarefa.id)}>
                                {tarefa.concluida ? 'Reabrir' : 'Concluir'}
                            </button>
                            <button type="button" className={`${styles.button} ${styles.danger}`} onClick={() => onExcluir(tarefa.id)}>
                                Excluir
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
