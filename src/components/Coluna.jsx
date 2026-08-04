export default function Coluna({ title, className, tarefas, setTarefas, coluna }) {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, coluna: {coluna} } : t)).
    return(
        <section className={className}>
            <h2>{title}</h2>
            {ItemTarefa({ tarefas })}

        </section>
    )
}