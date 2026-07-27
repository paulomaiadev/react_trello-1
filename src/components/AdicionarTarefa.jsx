export default function AdicionarTarefa(){
    return(
        <section id="adicionar-tarefa" aria-labelledby="adicionar-titulo">
                            <h3 id="adicionar-titulo">Adicionar nova tarefa</h3>
                            <form id="formulario">
                                <label className="sr-only" htmlFor="input-tarefa">Nova tarefa</label>
                                <input type="text" id="input-tarefa" placeholder="Digite sua tarefa"/>
                                <button id="btn-adicionar" type="submit">Adicionar</button>
                            </form>
        </section>
    )
}