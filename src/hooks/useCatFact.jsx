import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('Cargando Facto...')

  const refreshFact = (query = null) => {
    if (query) {
      setFact(query)
      return fact
    }
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Recuperar cita al recargar pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
  //
}
