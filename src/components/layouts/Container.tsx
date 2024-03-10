import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">{children}</main>
  )
}

export default Container
