import React from 'react'
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
      </div>
    </div>
  )
}

export default Cart
