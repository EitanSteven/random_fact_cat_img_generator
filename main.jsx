import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import React from 'react'
import './main.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <App />
  </>
)
