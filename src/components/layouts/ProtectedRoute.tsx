import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { ReactFragment } from 'react'

interface Props {
  children: React.ReactNode
}

const ProtectedRoute = () => {
  const { getAuth } = useAuth()

  if (!getAuth) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

export default ProtectedRoute
