import React from 'react'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { render, fireEvent, waitFor, screen } from '../utils/test-utils'

import { MockedProvider } from '@apollo/client/testing'
import {
  LOGIN_MUTATION,
  useLoginMutation,
} from '../graphql/mutations/loginMutation'
import LoginScreen from '../components/LoginScreen'
import * as ApolloClient from '@apollo/client'
import '@testing-library/jest-dom'

// Mocks setup
const mockData = {
  jwt: 'fake-jwt-token', // This is the token we expect to be stored in localStorage
  user: {
    id: 1,
    firstName: 'John Doe',
    lastName: 'Doe',
    email: 'test@example.com',
  },
}

const mocks = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: { email: 'test@example.com', password: 'password' },
    },
    result: { data: { login: mockData } },
  },
]

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: () => mockNavigate,
}))

beforeAll(() => {
  console.error = jest.fn()
  console.warn = jest.fn()
})

describe('LoginScreen', () => {
  test('Login screen should be displayed correctly', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginScreen />
      </MockedProvider>
    )

    expect(getByTestId('email')).toBeInTheDocument()
    expect(getByTestId('password')).toBeInTheDocument()
    expect(getByTestId('login')).toBeInTheDocument()
    expect(window.localStorage.getItem('x-token')).toBe(null) // Check token storage
  })

  test('Login function should store token and navigate to Account screen correctly', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginScreen />
      </MockedProvider>
    )

    fireEvent.change(getByTestId('email'), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(getByTestId('password'), { target: { value: 'password' } })
    fireEvent.click(getByTestId('login'))

    await waitFor(() => {
      expect(window.localStorage.getItem('x-token')).toBe(
        JSON.stringify(mockData)
      ) // Check token storage
      expect(mockNavigate).toHaveBeenCalledWith('/account') // Check navigation
    })
  })
})
