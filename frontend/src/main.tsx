import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/styles.scss'
import App from './App.tsx'
import ModalProvider from './common/providers/ModalProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)
