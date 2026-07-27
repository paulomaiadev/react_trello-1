export default function TarefasCadastradas(){
    return(
        <section id="lista-tarefas-section" aria-labelledby="lista-titulo">
                    <div className="section-header filtros-container">
                        <h3 id="lista-titulo">Tarefas cadastradas</h3>
                        <div id="filtros-tarefas" className="filtros" role="group" aria-label="Filtros de tarefas">
                            <button type="button" data-filter="all" className="filtro ativo">Todas</button>
                            <button type="button" data-filter="pendentes" className="filtro">Pendentes</button>
                            <button type="button" data-filter="concluidas" className="filtro">Concluídas</button>
                        </div>
                    </div>
                    <div className="contadores" aria-live="polite">
                        <span id="contador-total">Total: 0</span>
                        <span id="contador-pendentes">Pendentes: 0</span>
                        <span id="contador-concluidas">Concluídas: 0</span>
                    </div>
                    <ul id="lista-tarefas"></ul>
                </section>
    )
}