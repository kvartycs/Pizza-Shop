import React from 'react'

const CartItem = ({ price, amount, img, name, option }) => {
  return (
    <div className="cartitem">
      <div className="itemimg">
        <img
          src="../img/pizza/cheese chicken.svg"
          alt="pizza"
          width={80}
          height={80}
        />
      </div>
      <div className="itemdescription">
        <b>Сырный цыпленок</b>
        <p>тонкое тесто, 26см</p>
      </div>
      <div className="itemcount">
        <img src="../img/minus.svg" alt="minus" />
        <b>2</b>
        <img src="../img/plus.svg" alt="plus" />
      </div>
      <div className="itemprice">
        <b>770 ₽ </b>
      </div>
      <div className="itemremove">
        <img src="../img/remove.svg" alt="remove" />
      </div>
    </div>
  )
}

export default CartItem
