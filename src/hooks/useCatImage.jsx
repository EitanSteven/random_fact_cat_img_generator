import { useState, useEffect } from 'react'
import { catImgPrefix } from '../const'

// Recibe un "fact" y devuelve una url en "catImg", y un "status" true or false
export function useCatImage ({ fact }) {
  const [catImg, setCatImg] = useState()
  const [status, setStatus] = useState(true)
  useEffect(() => {
    if (!fact) return

    const firstFactWords = (fact.split(' ', 3)).join(' ')
    const randomCatImg = `/cat/says/${firstFactWords}?fontColor=orange&fontSize=70&json=true`

    fetch(`${catImgPrefix + randomCatImg}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la respuesta de la API')
        }
        return res.json()
      })
      .then(data => {
        const catId = data._id
        setCatImg(catImgPrefix + '/cat/' + catId + '/says/' + firstFactWords + '?fontColor=orange&fontSize=70')
        return catImg
      })
      .catch((error) => {
        console.error(error)
        setStatus(false)
      })
  }, [fact])
  return { catImg, status }
}
