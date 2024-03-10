import React from 'react'
import { CONFIGS } from '../../config/constants'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center p-4">
      <p>{CONFIGS.footerText}</p>
    </footer>
  )
}

export default Footer
