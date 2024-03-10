import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
