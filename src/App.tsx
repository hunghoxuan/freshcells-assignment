import { Routes, Route, Navigate } from 'react-router-dom'
import AccountScreen from './components/AccountScreen'
import LoginScreen from './components/LoginScreen'
import ProtectedRoute from './components/layouts/ProtectedRoute'
import Layout from './components/layouts/Layout'
import { ROUTES } from './config/constants'
import ErrorBoundary from './contexts/ErrorBoundary'

export const App = () => (
  <Layout>
    <ErrorBoundary>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.ACCOUNT} element={<AccountScreen />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginScreen />} />
        <Route
          path={ROUTES.NOT_FOUND}
          element={<Navigate to={ROUTES.LOGIN} replace />}
        />
      </Routes>
    </ErrorBoundary>
  </Layout>
)

export default App
