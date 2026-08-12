import Coluna from './Coluna'

const COLUNAS = [
    { key: 'A FAZER', title: 'A fazer' },
    { key: 'EM ANDAMENTO', title: 'Em andamento' },
    { key: 'CONCLUÍDA', title: 'Concluída' },
]

export default function TarefasCadastradas({
    tarefas = [],
    filtro,
    onFiltroChange,
    onConcluir,
    onExcluir,
    onAtualizarPrioridade,
    onAtualizarColuna,
}) {

    const total = tarefas.length
    const pendentes = tarefas.filter((tarefa) => !(tarefa.concluida || tarefa.coluna === 'CONCLUÍDA')).length
    const concluidas = total - pendentes
    
    const listaFiltrada = tarefas.filter((tarefa) => {
        const coluna = tarefa.coluna || (tarefa.concluida ? 'CONCLUÍDA' : 'A FAZER')
        if (filtro === 'all') return true
        if (filtro === 'pendentes') return coluna !== 'CONCLUÍDA'
        return coluna === 'CONCLUÍDA'
    })

    

    return (
        <section id="lista-tarefas-section" aria-labelledby="lista-titulo">
            <div className="section-header filtros-container">
                <h3 id="lista-titulo">Tarefas cadastradas</h3>
                <div className="contadores" aria-live="polite">
                    <span id="contador-total">Total: {total}</span>
                    <span id="contador-pendentes">Pendentes: {pendentes}</span>
                    <span id="contador-concluidas">Concluídas: {concluidas}</span>
                </div>
            </div>

            <div className="board">
                {COLUNAS.map((coluna) => {
                    const tarefasDaColuna = listaFiltrada.filter((tarefa) => {
                        const colunaTarefa = tarefa.coluna || (tarefa.concluida ? 'CONCLUÍDA' : 'A FAZER')
                        return colunaTarefa === coluna.key
                    })

                    return (
                        <Coluna
                            key={coluna.key}
                            title={coluna.title}
                            className="coluna"
                            coluna={coluna.key}
                            tarefas={tarefasDaColuna}
                            onConcluir={onConcluir}
                            onExcluir={onExcluir}
                            onAtualizarPrioridade={onAtualizarPrioridade}
                            onAtualizarColuna={onAtualizarColuna}
                        />
                    )
                })}
            </div>
        </section>
    )
}

