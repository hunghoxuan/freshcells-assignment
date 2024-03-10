import React from 'react'
import { CONFIGS } from '../../config/constants'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg">{CONFIGS.appName}</h1>
        {/* Add navigation links or buttons here */}
      </div>
    </header>
  )
}

export default Header
