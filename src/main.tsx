import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './index.css'
import 'modern-normalize'
import App from './App.tsx'
import { PropagateLoader } from 'react-spinners'
import { i18nReady } from './i18n' // твій проміс i18nReady

const root = createRoot(document.getElementById('root')!)
if (i18nReady) {
  i18nReady.then(() => {
    root.render(
      <StrictMode>
        <Suspense fallback={<PropagateLoader />}>
          <App />
        </Suspense>
      </StrictMode>
    )
  })
}
