import styles from './PrioridadeTarefa.module.css'

export default function PrioridadeTarefa({ prioridade, setPrioridade, label = '' }) {
    return (
        <label className={styles.label}>
            {label ? <span className={styles.text}>{label}</span> : null}
            <select value={prioridade} onChange={(event) => setPrioridade(event.target.value)} className={styles.select}>
                <option value="baixa">Baixa 🟢</option>
                <option value="media">Média 🟡</option>
                <option value="alta">Alta 🔴</option>
            </select>
        </label>
    )
}