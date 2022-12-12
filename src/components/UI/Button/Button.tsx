import React from 'react'
import classes from './Button.module.scss'

type ButtonProps = {
  children: any
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.cartbtn}>
      {children}
    </button>
  )
}

export default Button
