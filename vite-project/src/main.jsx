import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'
import App from './App.jsx'
import "./App.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
<CookiesProvider defaultSetOptions={{path:"/"}}>
    <App />
    </CookiesProvider>
  </StrictMode>,
)
