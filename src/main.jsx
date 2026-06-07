import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted Japanese font (subsetted woff2, served from our own domain — keeps CSP at 'self')
import '@fontsource/noto-sans-jp/japanese-400.css'
import '@fontsource/noto-sans-jp/japanese-700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
