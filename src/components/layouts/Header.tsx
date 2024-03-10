import React from 'react'
import { CONFIGS } from '../../config/constants'
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg">{CONFIGS.appName}</h1>
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
