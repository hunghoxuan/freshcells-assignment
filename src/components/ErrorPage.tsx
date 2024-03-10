import React from 'react'

const ErrorPage = ({ error }: any) => (
  <div>
    <h1>An error occurred</h1>
    <p>We're sorry, something went wrong.</p>
    {error && (
      <details>
        {error.toString()}
        <br />
        {error.stack}
      </details>
    )}
  </div>
)

export default ErrorPage
