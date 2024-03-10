import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './config/i18n'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './graphql/apolloClient'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>
)

// catch all unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.promise, 'reason:', event.reason)
  event.preventDefault()
})

// catch all unhandled errors
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})
