import { useState, useEffect } from 'react'
import axios from 'axios'

export default function BuscaCep() {
  const [cep, setCep] = useState('')
  const [cidade, setCidade] = useState('')
  const [erro, setErro] = useState('')

  async function consultar(cepParam) {
    const cleaned = (cepParam || '').toString().replace(/\D/g, '')
    if (!cleaned || cleaned.length < 8) {
      setCidade('')
      setErro('')
      return
    }

    try {
      const url = `https://viacep.com.br/ws/${cleaned}/json/`
      const { data } = await axios.get(url)
      if (data && data.erro) {
        setCidade('')
        setErro('CEP não encontrado')
        return
      }
      setCidade(data.localidade || '')
      setErro('')
    } catch (e) {
      setCidade('')
      setErro('Erro ao consultar CEP')
    }
  }

  useEffect(() => {
    const cleaned = cep.replace(/\D/g, '')
    if (cleaned.length === 8) consultar(cleaned)
    else if (!cep) {
      setCidade('')
      setErro('')
    }
  }, [cep])

  return (
    <section className="busca-cep" aria-labelledby="busca-cep-title">
      <h3 id="busca-cep-title">Buscar CEP</h3>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        maxLength={9}
      />
      <div aria-live="polite">
        {cidade ? <p>Cidade: {cidade}</p> : erro ? <p>{erro}</p> : null}
      </div>
    </section>
  )
}
