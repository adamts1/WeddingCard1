import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import { config as design1Config } from './designs/design1/config'
import { config as design2Config } from './designs/design2/config'
import { config as design3Config } from './designs/design3/config'

const designs = {
  '/design1': design1Config,
  '/design2': design2Config,
  '/design3': design3Config,
}

function applyPalette(palette) {
  const root = document.documentElement
  for (const [group, shades] of Object.entries(palette)) {
    if (typeof shades === 'string') {
      root.style.setProperty(`--color-${group}`, shades)
    } else {
      for (const [variant, value] of Object.entries(shades)) {
        const suffix = variant === 'DEFAULT' ? '' : `-${variant}`
        root.style.setProperty(`--color-${group}${suffix}`, value)
      }
    }
  }
}

// Apply palette matching the current URL path
const match = Object.keys(designs).find((p) => window.location.pathname.startsWith(p))
applyPalette((match ? designs[match] : design1Config).palette)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
