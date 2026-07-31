export default function Filtros(){
    return(
        <div className="section-header filtros-container">
                        <h3 id="lista-titulo">Tarefas cadastradas</h3>
            <div id="filtros-tarefas" className="filtros" role="group" aria-label="Filtros de tarefas">
                                <button type="button" data-filter="all" className="filtro ativo">Todas</button>
                                <button type="button" data-filter="pendentes" className="filtro">Pendentes</button>
                                <button type="button" data-filter="concluidas" className="filtro">Concluídas</button>
            </div>
        </div>
    )
}