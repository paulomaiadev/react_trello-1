
import PrioridadeTarefa from './PrioridadeTarefa'

export default function ItemTarefa({tarefas = [], onConcluir, onExcluir, prioridade, setPrioridade}){
    return (
        <>
            {tarefas.map((tarefa) => (
                <li key={tarefa.id} className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
                    <div className="tarefa-conteudo">
                        <span>{tarefa.texto}</span>
                        <PrioridadeTarefa prioridade={prioridade} setPrioridade={setPrioridade} />
                    </div>
                    <div className="acoes-tarefa">
                        <button type="button" className="btn btn-concluir" onClick={() => onConcluir(tarefa.id)}>
                            {tarefa.concluida ? 'Reabrir' : 'Concluir'}
                        </button>
                        <button type="button" className="btn btn-deletar" onClick={() => onExcluir(tarefa.id)}>
                            Excluir
                        </button>
                    </div>
                </li>
            ))}
        </>
    )
}
