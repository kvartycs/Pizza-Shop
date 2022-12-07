import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cartSlice)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)
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
        <div className="searchside"></div>
        <div className="buttonside">
          <Link to="/cart">
            <button>
              <ul>
                <li>{totalPrice}P</li>
                <li>|</li>
                <li>
                  <img src="./img/cart.svg" alt="cart" />
                </li>
                <li>{totalCount}</li>
              </ul>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
