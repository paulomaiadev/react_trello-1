export default function Header(props){
    return(
        <header className="site-header">
            <div className="brand">
                <h1>{props.titulo}</h1>
                <p>{props.subtitulo}</p>
            </div>
            <nav className="site-nav" aria-label="Navegação principal">
                <a href="#tarefas">Tarefas</a>
                <a href="#adicionar-tarefa">Adicionar</a>
                <a href="#sobre">Sobre</a>
            </nav>
        </header>
    )
}