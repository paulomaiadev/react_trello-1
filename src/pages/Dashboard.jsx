import { useState } from 'react'
import axios from 'axios'
import useLocalStorage from '../hooks/useLocalStorage'
import PainelTarefas from '../components/PainelTarefas'

const STORAGE_KEY = 'tarefas'

export default function Dashboard() {
    const [tarefas, setTarefas] = useLocalStorage(STORAGE_KEY, [])
    const [filtro, setFiltro] = useState('all')
    const [texto, setTexto] = useState('')
    const [prioridade, setPrioridade] = useState('media')

    async function consultarCidade(cepParam) {
        const cleaned = (cepParam || '').toString().replace(/\D/g, '')
        // CEP brasileiro tem 8 dígitos
        if (!cleaned || cleaned.length !== 8) return ''

        try {
        const url = `https://viacep.com.br/ws/${cleaned}/json/`
        const { data } = await axios.get(url)
        if (data && data.erro) return ''
        return data.localidade || ''
        } catch (err) {
        console.warn(`Erro ao consultar CEP ${cepParam}:`, err.message)
        return ''
        }
    }

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
    return(
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
                    onConcluir={concluirTarefa}
                    onExcluir={excluirTarefa}
                    onAtualizarPrioridade={atualizarPrioridade}
                    onAtualizarColuna={atualizarColunaTarefa}
        />
    )
}
        