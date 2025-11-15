
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './index.css'
import 'modern-normalize'
import App from './App.tsx'
import './i18n.js';
import {  PropagateLoader } from 'react-spinners'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PropagateLoader
    className="loader LSloader"
  color="hsla(204, 100%, 50%, 0.08)"
  size={30}
/>}>
    <App />
    </Suspense>
  </StrictMode>,
)
