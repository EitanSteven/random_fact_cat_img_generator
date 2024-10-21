import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { RandomCatPanel } from './components/RandomCatPanel'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { catImg, status } = useCatImage({ fact })

  // Recuperamos primeras tres palabras del Facto, y buscamos imagen
  const newFactHandleClick = async () => {
    refreshFact()
  }

  const downloadImage = () => {
    const a = document.createElement('a')
    a.href = catImg
    a.target = '_blank'
    a.setAttribute('download', 'cat-img')
    a.click()
    a.remove()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(e.target))
    refreshFact(query)
  }
  return (
    <>
      <main>
        <h1>Furry Facto Random 🐱</h1>
        <RandomCatPanel
          status={status}
          fact={fact}
          catImg={catImg}
          newFactHandleClick={newFactHandleClick}
        />

        {fact && <p>{fact}</p>}

        <section className='factos-options'>
          <button className='facto-itm' onClick={downloadImage}>⬇ Descargar</button>
          <form onSubmit={handleSubmit}>
            <input className='facto-itm facto-input' name='query' type='text' placeholder='Ingrese su furry facto...' />
            <button className='facto-itm'>🔍 Buscar Imagen</button>
          </form>
        </section>
      </main>
    </>
  )
}
