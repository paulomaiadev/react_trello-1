export default function Header({titulo, subtitulo}){
    return(
        <header className="site-header">
            <div className="brand">
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </div>
            <nav className="site-nav" aria-label="Navegação principal">
                <a href="#tarefas">Tarefas</a>
                <a href="#adicionar-tarefa">Adicionar</a>
                <a href="#sobre">Sobre</a>
            </nav>
        </header>
    )
}