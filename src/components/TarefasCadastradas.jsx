import { useState } from 'react'

import ListaTarefas from './ListaTarefas'

export default function TarefasCadastradas({ tarefas = [], onConcluir, onExcluir }){
    const [filtro, setFiltro] = useState('all')

    const listaFiltrada = tarefas.filter((t) => {
        if (filtro === 'all') return true
        if (filtro === 'pendentes') return !t.concluida
        return t.concluida
    })

    return(
        <section id="lista-tarefas-section" aria-labelledby="lista-titulo">
            <div className="section-header filtros-container">
                <h3 id="lista-titulo">Tarefas cadastradas</h3>
                <div id="filtros-tarefas" className="filtros" role="group" aria-label="Filtros de tarefas">
                    <button type="button" data-filter="all" className={filtro === 'all' ? 'filtro ativo' : 'filtro'} onClick={() => setFiltro('all')}>Todas</button>
                    <button type="button" data-filter="pendentes" className={filtro === 'pendentes' ? 'filtro ativo' : 'filtro'} onClick={() => setFiltro('pendentes')}>Pendentes</button>
                    <button type="button" data-filter="concluidas" className={filtro === 'concluidas' ? 'filtro ativo' : 'filtro'} onClick={() => setFiltro('concluidas')}>Concluídas</button>
                </div>
            </div>
            <ListaTarefas tarefas={listaFiltrada} onConcluir={onConcluir} onExcluir={onExcluir} />
        </section>
    )
}

