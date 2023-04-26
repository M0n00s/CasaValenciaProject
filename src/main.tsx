import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index'
import { LoginRouter } from './login/LoginRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
