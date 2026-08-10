import ListaTarefas from './ListaTarefas'

export default function Coluna({
    title,
    className,
    tarefas,
    coluna,
    onConcluir,
    onExcluir,
    onAtualizarPrioridade,
    onAtualizarColuna,
}) {
    return (
        <section className={className}>
            <h3>{title}</h3>
            <ListaTarefas
                tarefas={tarefas}
                coluna={coluna}
                onConcluir={onConcluir}
                onExcluir={onExcluir}
                onAtualizarPrioridade={onAtualizarPrioridade}
                onAtualizarColuna={onAtualizarColuna}
            />
        </section>
    )
}