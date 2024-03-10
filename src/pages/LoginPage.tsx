import React, { useState } from 'react'
import { CONFIGS } from '../config/constants'
import { ContainerTwoSides } from '../components/layouts/Index'
import Login from '../components/auth/Login'

const LoginPage = () => {
  return (
    <>
      <ContainerTwoSides
        left={<Login />}
        right={
          CONFIGS.backgroundImage &&
          <>
            <img
              src={CONFIGS.backgroundImage}
              alt="Right side"
              className="w-full h-full object-cover"
            />
          </>
        }
      />
    </>
  )
}

export default LoginPage
