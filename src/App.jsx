import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import PainelTarefas from './components/PainelTarefas'
import Sobre from './components/Sobre'
import Footer from './components/Footer'
import useLocalStorage from './hooks/useLocalStorage'

const STORAGE_KEY = 'tarefas'

function App() {
  const [tarefas, setTarefas] = useLocalStorage(STORAGE_KEY, [])
  const [filtro, setFiltro] = useState('all')
  const [texto, setTexto] = useState('')
  const [prioridade, setPrioridade] = useState('media')

  function adicionarTarefa({ texto: textoTarefa, prioridade: prioridadeTarefa }) {
    const novo = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      texto: textoTarefa,
      prioridade: prioridadeTarefa,
      concluida: false,
      coluna: 'A FAZER',
    }

    setTarefas((prev) => [...prev, novo])
    setTexto('')
    setPrioridade('media')
  }

  function concluirTarefa(id) {
    setTarefas((prev) =>
      prev.map((tarefa) => (tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa)),
    )
  }

  function excluirTarefa(id) {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id))
  }

  function atualizarPrioridade(id, novaPrioridade) {
    setTarefas((prev) =>
      prev.map((tarefa) => (tarefa.id === id ? { ...tarefa, prioridade: novaPrioridade } : tarefa)),
    )
  }

  return (
    <div className="page-shell">
      <Header titulo="TaskFlow" subtitulo="Gerencie suas tarefas com mais organização." />
      <main id="app">
        <PainelTarefas
          sectionHeader="Minhas tarefas"
          tarefas={tarefas}
          filtro={filtro}
          onFiltroChange={setFiltro}
          texto={texto}
          setTexto={setTexto}
          prioridade={prioridade}
          setPrioridade={setPrioridade}
          onAdicionar={adicionarTarefa}
          onConcluir={concluirTarefa}
          onExcluir={excluirTarefa}
          onAtualizarPrioridade={atualizarPrioridade}
        />

        <Sobre />
      </main>

      <Footer />
    </div>
  )
}

export default App
