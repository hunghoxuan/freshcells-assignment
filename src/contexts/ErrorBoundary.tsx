import React, { Component, ErrorInfo, ReactNode } from 'react'
import ErrorPage from '../components/ErrorPage'

// Define a type for the props
interface ErrorBoundaryProps {
  children: ReactNode // Using ReactNode type for children
}

// Define a type for the state
interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null, errorInfo: null }

  static getDerivedStateFromError = (error: Error): ErrorBoundaryState => {
    return { hasError: true, error, errorInfo: null }
  }

  componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
