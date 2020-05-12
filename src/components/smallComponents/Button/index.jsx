import React from 'react'
import './myButton.scss'

const Button = ({
    className: userClassName = '',
    color: userColor = 'red',
    size: userSize = 'medium',
    children = 'Text',
    style: userStyle = {},
    onClick = () =>{}
}) =>{
    return(
        <div onClick={onClick}
        className={`myButton ${userClassName} ${userColor} ${userSize}`}
         style={userStyle}
        >
            {children}
        </div>
    )
}

export default Button