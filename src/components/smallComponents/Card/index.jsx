import React from 'react'
import './myCard.scss'

import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    myCard: src => {
        console.log(src)
        let background;
        if(!!src)
            background = {
                backgroundImage: `url(${require("../../static/img/" + src)})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } 
        else {
            background =  {
                backgroundColor: 'black'
            }
        }
        return { 
            ...background,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    
  })

const Card = ({
    classStyle: userClass = '',
    src = null,
    children = '',
    style: userStyle = {},
}) =>{

    const classes = useStyles(src)
    return(
        <div
        className={`myCard ${userClass} ${classes.myCard}`}
         style={userStyle}
        >
            
            {children}
        </div>
    )
}

export default Card