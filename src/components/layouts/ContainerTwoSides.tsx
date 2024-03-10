import React, { ReactNode } from 'react'

interface ContainerProps {
  left: ReactNode
  right: ReactNode
}

const ContainerTwoSides: React.FC<ContainerProps> = ({ left, right }) => {
  return (
    <>
      <div className="md:flex-1 w-full flex justify-center items-start p-4">
        <div className="flex justify-center items-center h-screen w-full">
          <div className="max-w-md w-full">{left}</div>
        </div>
      </div>
      <div className="hidden md:block md:flex-1 md:w-full bg-blue-100">
        <div className="flex justify-center items-center h-screen w-full">
          {right}
        </div>
      </div>
    </>
  )
}

export default ContainerTwoSides
