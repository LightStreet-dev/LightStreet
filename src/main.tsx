
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './index.css'
import 'modern-normalize'
import App from './App.tsx'
import './i18n';
import { PacmanLoader } from 'react-spinners'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PacmanLoader
    className="loader"
  color="#d4e9e6"
  size={30}
/>}>
    <App />
    </Suspense>
  </StrictMode>,
)
