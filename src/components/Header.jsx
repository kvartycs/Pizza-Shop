import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="header_content">
        <div className="logoside">
          <div className="">
            <img src="./img/logo.svg" alt="logo" />
          </div>
          <div>
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="buttonside">
          <button>
            <ul>
              <li>540P</li>
              <li>|</li>
              <li>
                <img src="./img/cart.svg" alt="cart" />
              </li>
              <li>3</li>
            </ul>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
