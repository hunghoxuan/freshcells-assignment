import { Routes, Route, Navigate } from 'react-router-dom'
import AccountPage from './pages/AccountPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/layouts/ProtectedRoute'
import Layout from './components/layouts/Layout'
import { ROUTES } from './config/constants'
import ErrorBoundary from './contexts/ErrorBoundary'
import { Suspense } from 'react'

export const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Layout>
      <ErrorBoundary>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
          </Route>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route
            path={ROUTES.NOT_FOUND}
            element={<Navigate to={ROUTES.LOGIN} replace />}
          />
        </Routes>
      </ErrorBoundary>
    </Layout>
  </Suspense>
)

export default App
