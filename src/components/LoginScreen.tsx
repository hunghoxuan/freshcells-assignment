import React, { useState } from 'react'
import { CONFIGS } from '../config/constants'
import { ContainerTwoSides } from './layouts/Index'
import Login from './auth/Login'

const LoginScreen = () => {
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

export default LoginScreen
