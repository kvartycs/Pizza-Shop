import React from 'react'
import { Link } from 'react-router-dom'
import Button from './UI/Button/Button'

const Header = () => {
  return (
    <header>
      <div className="header_content">
        <Link to="">
          <div className="logoside">
            <div className="">
              <img src="./img/logo.svg" alt="logo" />
            </div>
            <div>
              <h1>REACT PIZZA</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <div className="buttonside">
          <Link to="/cart">
            <Button>
              <ul>
                <li>520P</li>
                <li>|</li>
                <li>
                  <img src="./img/cart.svg" alt="cart" />
                </li>
                <li>3</li>
              </ul>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
