import React from 'react'
import { ContainerTwoSides } from './layouts/Index'
import Account from './auth/Account'

const AccountScreen = () => {
  return (
    <>
      <ContainerTwoSides
        left={<Account />}
        right={
          <>
            {' '}
            <p className="text-xl">
              {' '}
              <h1>Hey Recruiter Officer! </h1>
              <br /> I coded this demo with @love and hope you love it too.{' '}
              <br /> <br />
              Have a nice day.{' '}
            </p>{' '}
          </>
        }
      />
    </>
  )
}

export default AccountScreen
