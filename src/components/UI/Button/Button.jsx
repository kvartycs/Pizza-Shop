import React from 'react'
import classes from './Button.module.scss'

const Button = ({ children }) => {
  return <button className={classes.cartbtn}>{children}</button>
}

export default Button
