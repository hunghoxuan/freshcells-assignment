import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../config/constants'
import { t } from 'i18next'
import Button from '../common/Button'

const LogoutButton = () => {
  const navigate = useNavigate()
  const { getAuth, setAuth } = useAuth()

  const handleLogout = () => {
    setAuth(null)
    navigate(ROUTES.LOGIN)
  }

  return <Button text={t('logout')} id="logout" onClick={handleLogout} />
}

export default LogoutButton
