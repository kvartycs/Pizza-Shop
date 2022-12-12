import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty: React.FC = () => {
  return (
    <div className="cart-empty">
      <h1>
        Корзина пустая <b>😕</b>{' '}
      </h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src="./img/empty-cart.svg" alt="empty" />
      <Link to="/">
        <button className="back">
          <img src="./img/back arrow.svg" alt="arrow" /> Вернуться назад
        </button>
      </Link>
    </div>
  )
}

export default CartEmpty
