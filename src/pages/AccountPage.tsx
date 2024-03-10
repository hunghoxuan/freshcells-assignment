import React from 'react'
import { ContainerTwoSides } from '../components/layouts/Index'
import Account from '../components/auth/Account'

const AccountPage = () => {
  return (
    <>
      <ContainerTwoSides
        left={<Account />}
        right={
          <>
            {' '}
            <div className="text-xl">
              {' '}
              <h1>Hi, </h1>
              <br /> This project is made with @love and hope you like it :) {' '}
              <br /> <br />
              Have a nice day.{' '}
            </div>{' '}
          </>
        }
      />
    </>
  )
}

export default AccountPage
