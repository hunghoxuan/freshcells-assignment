export const ROUTES = {
  LOGIN: '/login',
  ACCOUNT: '/account',
  HOME: '/',
  NOT_FOUND: '*',
}

export const CONFIGS = {
  appName: process.env.REACT_APP_APP_NAME || 'DEMO',
  language: process.env.REACT_APP_LANGUAGE || 'en',
  footerText:
    process.env.REACT_APP_FOOTER_TEXT || '© 2024 All Rights Reserved.',
  backgroundImage: process.env.REACT_APP_BACKGROUND_IMAGE || 'bg-black',
}

export const GRAPHQL_SERVER =
  process.env.REACT_APP_GRAPHQL_SERVER ||
  'https://cms.trial-task.k8s.ext.fcse.io/graphql'

export const DEMO_USER = {
  email: process.env.REACT_APP_DEMO_USERNAME || 'demo@gmail.com',
  password: process.env.REACT_APP_DEMO_PASSWORD || '', // dont use this password in production
}
