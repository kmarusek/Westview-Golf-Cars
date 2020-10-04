import React from 'react'
import './myButton.scss'

const Button = ({
  className: userClassName = '',
  color: userColor = 'red',
  size: userSize = 'medium',
  children = 'Text',
  style: userStyle = {},
  ...props
}) => {
  const { onClick } = props

  return (
    <div
      onClick={onClick}
      onKeyPress={onClick}
      className={`myButton ${userClassName} ${userColor} ${userSize}`}
      style={userStyle}
      role='button'
      tabIndex='0'
    >
      {children}
    </div>
  )
}

export default Button
