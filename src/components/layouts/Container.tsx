import React, { ReactNode } from 'react'

interface ContainerProps {
  rightImageUrl?: string
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children, rightImageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">{children}</div>
  )
}

export default Container
