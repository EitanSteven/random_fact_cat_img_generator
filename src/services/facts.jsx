import { furryFacto } from '../const'

// Hace fetch a la URL proporcionada y devuelve un fact
export const getRandomFact = () => {
  return fetch(furryFacto)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      const fact = data.fact
      return fact
    })
}
