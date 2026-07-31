import ListaTarefas from './ListaTarefas'

export default function TarefasCadastradas({
    tarefas = [],
    filtro,
    onFiltroChange,
    onConcluir,
    onExcluir,
    onAtualizarPrioridade,
}) {
    const listaFiltrada = tarefas.filter((tarefa) => {
        if (filtro === 'all') return true
        if (filtro === 'pendentes') return !tarefa.concluida
        return tarefa.concluida
    })

    return (
        <section id="lista-tarefas-section" aria-labelledby="lista-titulo">
            <div className="section-header filtros-container">
                <h3 id="lista-titulo">Tarefas cadastradas</h3>
                <div id="filtros-tarefas" className="filtros" role="group" aria-label="Filtros de tarefas">
                    <button type="button" data-filter="all" className={filtro === 'all' ? 'filtro ativo' : 'filtro'} onClick={() => onFiltroChange('all')}>Todas</button>
                    <button type="button" data-filter="pendentes" className={filtro === 'pendentes' ? 'filtro ativo' : 'filtro'} onClick={() => onFiltroChange('pendentes')}>Pendentes</button>
                    <button type="button" data-filter="concluidas" className={filtro === 'concluidas' ? 'filtro ativo' : 'filtro'} onClick={() => onFiltroChange('concluidas')}>Concluídas</button>
                </div>
            </div>
            <ListaTarefas
                tarefas={listaFiltrada}
                onConcluir={onConcluir}
                onExcluir={onExcluir}
                onAtualizarPrioridade={onAtualizarPrioridade}
            />
        </section>
    )
}

