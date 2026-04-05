import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { palette } from './theme/colors'
import './index.css'
import App from './App.jsx'

// Apply palette as CSS variables so the app style is driven by src/theme/colors.js
function applyPalette() {
  const root = document.documentElement
  root.style.setProperty('--color-cream', palette.cream.DEFAULT)
  root.style.setProperty('--color-cream-light', palette.cream.light)
  root.style.setProperty('--color-cream-dark', palette.cream.dark)
  root.style.setProperty('--color-blush', palette.blush.DEFAULT)
  root.style.setProperty('--color-blush-light', palette.blush.light)
  root.style.setProperty('--color-blush-dark', palette.blush.dark)
  root.style.setProperty('--color-magenta', palette.magenta.DEFAULT)
  root.style.setProperty('--color-green', palette.green.DEFAULT)
  root.style.setProperty('--color-olive', palette.olive.DEFAULT)
}
applyPalette()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
