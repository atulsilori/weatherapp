import React from 'react'
import { createRoot } from 'react-dom/client'

import App from 'component/App'

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement
if (rootElement) {
  createRoot(rootElement).render(<App />)
}
