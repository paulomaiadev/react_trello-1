import AdicionarTarefa from './AdicionarTarefa'
import TarefasCadastradas from './TarefasCadastradas'

export default function PainelTarefas({
    sectionHeader,
    tarefas,
    filtro,
    onFiltroChange,
    texto,
    setTexto,
    prioridade,
    setPrioridade,
    onAdicionar,
    onConcluir,
    onExcluir,
    onAtualizarPrioridade,
    onAtualizarColuna,
}) {
    return (
        <section className="painel-tarefas" aria-labelledby="tarefas-title" id="tarefas">
            <header className="section-header">
                <h2 id="tarefas-title">{sectionHeader}</h2>
            </header>

            <AdicionarTarefa
                button="Adicionar"
                texto={texto}
                setTexto={setTexto}
                prioridade={prioridade}
                setPrioridade={setPrioridade}
                onAdicionar={onAdicionar}
            />

            <TarefasCadastradas
                tarefas={tarefas}
                filtro={filtro}
                onFiltroChange={onFiltroChange}
                onConcluir={onConcluir}
                onExcluir={onExcluir}
                onAtualizarPrioridade={onAtualizarPrioridade}
                onAtualizarColuna={onAtualizarColuna}
            />
        </section>
    )
}