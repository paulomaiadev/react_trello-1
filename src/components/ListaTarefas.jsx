
import ItemTarefa from "./ItemTarefas"

export default function ListaTarefas({tarefas, onConcluir, onExcluir}){
    const total = tarefas.length
    const pendentes = tarefas.filter((tarefa) => !tarefa.concluida).length
    const concluidas = total - pendentes
    return(
        <>
            <div className="contadores" aria-live="polite">
                <span id="contador-total">Total: {total}</span>
                <span id="contador-pendentes">Pendentes: {pendentes}</span>
                <span id="contador-concluidas">Concluídas: {concluidas}</span>
            </div>
            <ul id="lista-tarefas">
                <ItemTarefa tarefas={tarefas} onConcluir={onConcluir} onExcluir={onExcluir} />
            </ul>
        </>
    )
}


