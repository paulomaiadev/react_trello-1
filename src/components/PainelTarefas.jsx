import AdicionarTarefa from './AdicionarTarefa'
import TarefasCadastradas from './TarefasCadastradas'
//import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const STORAGE_KEY = 'tarefas'

export default function PainelTarefas({sectionHeader}){
    const [tarefas, setTarefas] = useLocalStorage(STORAGE_KEY, [])
    

    function adicionarTarefa({ texto, prioridade }) {
        const novo = {
            id: Date.now() + Math.floor(Math.random() * 1000),
            texto,
            prioridade,
            concluida: false
        }
        setTarefas((prev) => [...prev, novo])
    }

    function concluirTarefa(id){
        setTarefas((prev) => prev.map((t) => t.id === id ? { ...t, concluida: !t.concluida } : t))
    }

    function excluirTarefa(id){
        setTarefas((prev) => prev.filter((t) => t.id !== id))
    }




    return(
        <section className="painel-tarefas" aria-labelledby="tarefas-title">
            <header className="section-header">
                <h2 id="tarefas-title">{sectionHeader}</h2>
            </header>

            <AdicionarTarefa  button='Adicionar' onAdicionar={adicionarTarefa}></AdicionarTarefa>

            <TarefasCadastradas 
                tarefas={tarefas} 
                onConcluir={concluirTarefa}
                onExcluir={excluirTarefa}
            ></TarefasCadastradas>
        </section>
    )
}