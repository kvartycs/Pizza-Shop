import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  return (
    <div className="cart">
      <div className="cartcontent">
        <div className="cartheader">
          <div className="cartside">
            <img src="../img/cartblack.svg" alt="cart" width={29} height={29} />
            <b>Корзина</b>
          </div>
          <div className="deleteside">
            <img src="../img/delete.svg" alt="delete" width={20} height={20} />

            <p>Очистить корзину</p>
          </div>
        </div>
        <div className="cartitems">
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
        <div className="total">
          <div className="amount">
            Всего пицц: <b>3 шт</b>
          </div>
          <div className="price">
            Сумма заказа: <b>900 ₽</b>
          </div>
        </div>
        <div className="btns">
          <Link to="/">
            <button className="back">
              <img src="./img/back arrow.svg" alt="arrow" /> Вернуться назад
            </button>
          </Link>

          <button className="pay">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
