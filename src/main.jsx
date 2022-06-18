import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AddToCartProvider } from './providers/addToCart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddToCartProvider>
      <App />
    </AddToCartProvider>
  </React.StrictMode>
)
