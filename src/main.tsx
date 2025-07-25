
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './index.css'
import 'modern-normalize'
import App from './App.tsx'
import './i18n';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
    <App />
    </Suspense>
  </StrictMode>,
)
