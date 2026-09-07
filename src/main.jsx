import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (subsetted woff2, served from our own domain — keeps CSP at 'self')
import '@fontsource/noto-sans-jp/japanese-400.css'
import '@fontsource/noto-sans-jp/japanese-700.css'
// Editorial serif display faces (Academic Press design)
import '@fontsource/fraunces/300.css'
import '@fontsource/fraunces/400.css'
import '@fontsource/fraunces/500.css'
import '@fontsource/fraunces/400-italic.css'
import '@fontsource/fraunces/600.css'
import '@fontsource/fraunces/700.css'
import '@fontsource/noto-serif-jp/japanese-400.css'
import '@fontsource/noto-serif-jp/japanese-600.css'
import '@fontsource/noto-serif-jp/japanese-700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
