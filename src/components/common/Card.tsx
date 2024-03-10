import React from 'react'
import PropTypes from 'prop-types'

interface CardProps {
  title?: string
  showBorder?: boolean
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  children,
  title = '',
  showBorder = true,
}) => {
  const className = showBorder
    ? 'card-padding card-border'
    : 'card-padding'

  return (
    <div className={className}>
      {title && <div className="card-title">{title}</div>}
      <div>{children}</div>
    </div>
  )
}

export default Card
