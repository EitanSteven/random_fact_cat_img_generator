import refreshIcon from '../assets/refresh.png'
import { useState, useEffect } from 'react'
import { grid } from 'ldrs'

export function RandomCatPanel ({ status, newFactHandleClick, fact, catImg }) {
  const [loading, setLoading] = useState(true)
  grid.register()

  useEffect(() => {
    if (catImg) {
      setLoading(true)
    }
  }, [catImg])

  const handleImageLoad = () => {
    setLoading(false)
  }

  const CatImage = ({ catImg, fact, loading, handleImageLoad }) => {
    if (!status) return <p>Error al cargar la imagen</p>

    return (
      <>
        <img
          src={catImg}
          alt={`Gato generado con facto: ${fact}`}
          onLoad={handleImageLoad}
          style={{ display: loading ? 'none' : 'block' }}
        />
      </>
    )
  }

  return (
    <section className='random-cat-img-container'>
      {status && (
        <button onClick={newFactHandleClick} className='refresh-image-btn'>
          <img className='refresh-png' src={refreshIcon} alt='refresh-icon' />
        </button>
      )}
      {loading &&
        <div className='Loader'>
          <l-grid
            size='120'
            speed='.9'
            color='white'
          />
        </div>}
      <CatImage
        catImg={catImg}
        fact={fact}
        loading={loading}
        handleImageLoad={handleImageLoad}
        status={status}
      />
    </section>
  )
}
