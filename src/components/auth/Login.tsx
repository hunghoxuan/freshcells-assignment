import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import {
  LOGIN_MUTATION,
  useLoginMutation,
} from '../../graphql/mutations/loginMutation'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Input, Button, Message, Loading, Card } from '../common/Index'
import { useTranslation } from 'react-i18next'
import { ROUTES, DEMO_USER } from '../../config/constants'
import { validateLoginInput } from '../../utils/validations'
import { ContainerTwoSides } from '../layouts/Index'

const Login = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login, mutateError } = useLoginMutation()
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const loginAsDemo = () => {
    setEmail(DEMO_USER.email)
    setPassword(DEMO_USER.password)
  }

  const resetStates = () => {
    setPassword('') // Reset the password. Retain the email for user convenience.
    setLoading(false)
    setError('')
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    // Validate the input
    if (!validateLoginInput(email, password)) {
      setError(t('invalidLoginInput'))
      return
    }

    try {
      setLoading(true)
      const { data } = await login(email, password)
      setAuth(JSON.stringify(data.login))
      navigate(ROUTES.ACCOUNT) // Navigate to account page on success
    } catch (e: any) {
      resetStates()
      setError(t('invalidUser'))
    }
  }

  return (
    <Card title={t('login')}>
      <Input
        label={t('email')}
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <Input
        label={t('password')}
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loading && <Loading />}
      {(error || mutateError) && (
        <Message type="error" text={error || mutateError?.message} />
      )}
      <Button text={t('login')} id="login" onClick={handleSubmit} />
      <hr />
      <Button
        text={t('login') + ' AS DEMO'}
        className="btn-secondary"
        onClick={loginAsDemo}
      />
    </Card>
  )
}

export default Login
