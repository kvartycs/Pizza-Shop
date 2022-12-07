import React from 'react'
import classes from './Button.module.scss'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.cartbtn}>
      {children}
    </button>
  )
}

export default Button
