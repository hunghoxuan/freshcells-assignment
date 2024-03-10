import React from 'react'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { render, fireEvent, waitFor, screen } from '../utils/test-utils'

import { MockedProvider } from '@apollo/client/testing'
import { GET_USER_QUERY } from '../graphql/queries/userQuery'
import {
  LOGIN_MUTATION,
  useLoginMutation,
} from '../graphql/mutations/loginMutation'

import AccountScreen from '../components/AccountScreen'
import LoginScreen from '../components/LoginScreen'

import * as ApolloClient from '@apollo/client'
import '@testing-library/jest-dom'

// Mocks setup
const mockData = {
  jwt: 'fake-jwt-token', // This is the token we expect to be stored in localStorage
  user: {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@example.com',
  },
}

const mocks = [
  {
    request: {
      query: GET_USER_QUERY,
      variables: { id: 1 },
      context: {
        headers: {
          Authorization: `Bearer ${mockData.jwt}`,
        },
      },
    },
    result: { data: { user: mockData.user } },
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

// Mock localStorage
// const mockLocalStorage = {
//   getItem: jest.fn(),
// };

// Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

// Mock the useQuery hook
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(),
}))
import { useQuery } from '@apollo/client'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: jest.fn(),
}))

const mockNavigate = jest.requireMock('react-router-dom').useNavigate

beforeAll(() => {
  console.error = jest.fn()
  console.warn = jest.fn()
  localStorage.clear()
})

describe('AccountScreen', () => {
  test('Should display error message if not logged in', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={null}>
        <AccountScreen />
      </MockedProvider>
    )

    expect(localStorage.getItem('x-token')).toBe(null) // Check token storage
    expect(getByTestId('message')).toBeInTheDocument() // Check if the message is displayed
  })

  test('Should display Firstname, Lastname correctly if user is logged in', async () => {
    localStorage.setItem('x-token', JSON.stringify(mockData)) // mock logged in user

    useQuery.mockImplementation((query) => {
      if (query === GET_USER_QUERY) {
        return { data: mockData } // mock query data
      }
      return { data: undefined }
    })

    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={null}>
        <AccountScreen />
      </MockedProvider>
    )

    expect(localStorage.getItem('x-token')).toBe(JSON.stringify(mockData)) // Check token storage if logged in

    // Use waitFor to handle the async nature of the data fetching
    await waitFor(() => {
      expect(getByTestId('firstName').value).toBe('John')
      expect(getByTestId('lastName').value).toBe('Doe')

      expect(getByTestId('firstName')).toHaveAttribute('readonly')
      expect(getByTestId('lastName')).toHaveAttribute('readonly')
    })
  })
})
