import React from 'react'
import classes from './Button.module.scss'

const Button = ({ children }) => {
  const pressedButton = () => {}
  return (
    <button onClick={pressedButton} className={classes.cartbtn}>
      {children}
    </button>
  )
}

export default Button
