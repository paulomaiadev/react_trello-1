import './App.css'
import Header from './components/Header'
import PainelTarefas from './components/PainelTarefas'
import Sobre from './components/Sobre'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className="page-shell">
        <Header titulo='TaskFlow' subtitulo='Gerencie suas tarefas com mais organização.'></Header>
        <main id="app">
          <PainelTarefas sectionHeader='Minhas tarefas' ></PainelTarefas>

            <Sobre></Sobre>

        </main>

        <Footer></Footer>    

      </div>
    </>
  )
}

export default App
