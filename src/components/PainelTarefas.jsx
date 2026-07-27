import AdicionarTarefa from './AdicionarTarefa'
import TarefasCadastradas from './TarefasCadastradas'

export default function PainelTarefas(){
    return(
        <section className="painel-tarefas" aria-labelledby="tarefas-title">
            <header className="section-header">
                <h2 id="tarefas-title">Minhas Tarefas</h2>
            </header>

            <AdicionarTarefa></AdicionarTarefa>

            <TarefasCadastradas></TarefasCadastradas>
        </section>
    )
}