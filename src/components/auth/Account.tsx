import React from 'react'
import { useGetUserQuery } from '../../graphql/queries/userQuery'
import { useAuth } from '../../contexts/AuthContext'
import { Input, Button, Message, Loading, Card } from '../common/Index'
import LogoutButton from '../auth/LogoutButton'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'

const Account = () => {
  const { getAuth } = useAuth()
  const auth = getAuth()
  if (!auth)
    return (
      <>
        <Message type="error" text={t('invalidUser')} /> <LogoutButton />{' '}
      </>
    )

  const { data, loading, error } = useGetUserQuery(auth.user.id, auth.jwt)

  if (loading) return <Loading />
  if (error || !data)
    return (
      <>
        <Message type="error" text={t('invalidUser')} /> <LogoutButton />{' '}
      </>
    )
  return (
    <Card title={t('accountDetails')}>
      <Input
        label={t('firstName')}
        id="firstName"
        value={data.user.firstName}
        readOnly
      />
      <Input
        label={t('lastName')}
        id="lastName"
        value={data.user.lastName}
        readOnly
      />
      <LogoutButton />
    </Card>
  )
}

export default Account
