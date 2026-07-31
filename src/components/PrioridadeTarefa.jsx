export default function PrioridadeTarefa({ prioridade, setPrioridade }) {
    return (      
        <select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
        >
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
        </select>
    )
}