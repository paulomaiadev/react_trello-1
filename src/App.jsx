import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import PainelTarefas from './components/PainelTarefas'
import Sobre from './components/Sobre'
import Footer from './components/Footer'
import useLocalStorage from './hooks/useLocalStorage'
import BuscaCep from './components/BuscaCep'

const STORAGE_KEY = 'tarefas'

function App() {
  const [tarefas, setTarefas] = useLocalStorage(STORAGE_KEY, [])
  const [filtro, setFiltro] = useState('all')
  const [texto, setTexto] = useState('')
  const [prioridade, setPrioridade] = useState('media')
  const [cep, setCep] = useState('')
  const [cidade, setCidade] = useState('')

  async function consultarCidade(cepParam) {
    const cleaned = (cepParam || '').replace(/\D/g, '')
    if (!cleaned || cleaned.length < 8) return ''

    try {
      const url = `https://viacep.com.br/ws/${cleaned}/json/`
      const { data } = await axios.get(url)
      if (data && data.erro) return ''
      const cidadeLocal = data.localidade || ''
      setCidade(cidadeLocal)
      return cidadeLocal
    } catch (err) {
      setCidade('')
      return ''
    }
  }

  useEffect(() => {
    if (cep && cep.replace(/\D/g, '').length === 8) {
      consultarCidade(cep)
    } else {
      setCidade('')
    }
  }, [cep])

  async function adicionarTarefa({ texto: textoTarefa, prioridade: prioridadeTarefa, cep: cepTarefa }) {
    const cidadeTarefa = await consultarCidade(cepTarefa)

    const novo = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      texto: textoTarefa,
      prioridade: prioridadeTarefa,
      concluida: false,
      coluna: 'A FAZER',
      cep: cepTarefa || '',
      cidade: cidadeTarefa || '',
    }

    setTarefas((prev) => [...prev, novo])
    setTexto('')
    setPrioridade('media')
    setCep('')
    setCidade('')
  }

  function atualizarColunaTarefa(id, novaColuna) {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, coluna: novaColuna, concluida: novaColuna === 'CONCLUÍDA' }
          : tarefa,
      ),
    )
  }

  function concluirTarefa(id) {
    setTarefas((prev) =>
      prev.map((tarefa) => {
        if (tarefa.id !== id) return tarefa

        const estaConcluida = tarefa.coluna === 'CONCLUÍDA' || tarefa.concluida

        return {
          ...tarefa,
          coluna: estaConcluida ? 'A FAZER' : 'CONCLUÍDA',
          concluida: !estaConcluida,
        }
      }),
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

  const tarefasExibidas = tarefas.map((tarefa) => ({
    ...tarefa,
    coluna: tarefa.coluna || (tarefa.concluida ? 'CONCLUÍDA' : 'A FAZER'),
  }))

  return (
    <div className="page-shell">
      <Header titulo="TaskFlow" subtitulo="Gerencie suas tarefas com mais organização." />
      <main id="app">
        <PainelTarefas
          sectionHeader="Minhas tarefas"
          tarefas={tarefasExibidas}
          filtro={filtro}
          onFiltroChange={setFiltro}
          texto={texto}
          setTexto={setTexto}
          prioridade={prioridade}
          setPrioridade={setPrioridade}
          onAdicionar={adicionarTarefa}
          cep={cep}
          setCep={setCep}
          cidade={cidade}
          onConcluir={concluirTarefa}
          onExcluir={excluirTarefa}
          onAtualizarPrioridade={atualizarPrioridade}
          onAtualizarColuna={atualizarColunaTarefa}
        />

        <BuscaCep />

        <Sobre />
      </main>

      <Footer />
    </div>
  )
}

export default App
