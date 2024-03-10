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
    ? 'border border-gray-200 rounded-lg shadow-sm overflow-hidden p-4 py-10'
    : 'p-4 py-10'

  return (
    <div className={className}>
      {title && <div className="text-2xl font-bold text-gray-800">{title}</div>}
      <div>{children}</div>
    </div>
  )
}

export default Card
