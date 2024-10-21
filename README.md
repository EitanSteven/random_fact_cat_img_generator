# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs: 🐱

- Recupera un hecho aleatorio de gatos de la primera API

    - Facts/hecho Random: https://catfact.ninja/fact

- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

    - Imagen random: https://cataas.com/cat/says/hello

    import { grid } from 'ldrs'

grid.register()

// Default values shown
<l-grid
  size="60"
  speed="1.5" 
  color="black" 
></l-grid>


 {status ? <img className='catImg' onLoad={handleImageLoad} src={catImg} alt={`Random cat image for "${fact}"`} loading='lazy' crossOrigin='anonymous' /> : 'Error al cargar la imagen'}
