import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  getAuth: () => any
  setAuth: (jwt: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // use localStorage for persistence of the token. Should use Cookies with the HttpOnly and Secure flags, or Zustand for a better solution.
  const token = localStorage.getItem('x-token')
  const [jwt, setJwt] = useState<string | null>(token)

  const setAuth = (jwt: string | null) => {
    if (jwt) {
      localStorage.setItem('x-token', jwt)
    } else {
      localStorage.removeItem('x-token')
    }
    setJwt(jwt)
  }

  const getAuth = () => {
    return jwt ? JSON.parse(jwt) : null
  }

  return (
    <AuthContext.Provider value={{ getAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
