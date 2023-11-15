import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FindProvider from './context/FindContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FindProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FindProvider>,

)
