import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '../config/i18n'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../graphql/apolloClient'
import { AuthProvider } from '../contexts/AuthContext'
import { ReactNode } from 'react'

const AllTheProviders = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>
}

const customRender = (ui: any, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
