import React from 'react'
import styled from 'styled-components'
import './myCard.scss'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  myCard: (src) => {
    console.log(src)
    let background
    if (!!src)
      background = {
        backgroundImage: `url(${require('../../../static/images/' + src)})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }
    else {
      background = {
        backgroundColor: 'black',
      }
    }
    return {
      ...background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
})

const Card = ({
  classStyle: userClass = '',
  src = null,
  children = '',
  style: userStyle = {},
}) => {
  const classes = useStyles(src)
  return (
    <div className={`myCard ${userClass} ${classes.myCard}`} style={userStyle}>
      {children}
    </div>
  )
}

export const Card2 = styled.div`

`


export default Card
