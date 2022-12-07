import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice'

const CartItem = ({ id, price, count, image, name, type, size }) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(addItem({ id }))
  }
  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className="cartitem">
      <div className="itemimg">
        <img src={image} alt="pizza" width={80} height={80} />
      </div>
      <div className="itemdescription">
        <b>{name}</b>
        <p>
          {type}, {Number(size)}см
        </p>
      </div>
      <div className="itemcount">
        <img src="../img/minus.svg" alt="minus" onClick={onClickMinus} />
        <b>{count}</b>
        <img src="../img/plus.svg" alt="plus" onClick={onClickPlus} />
      </div>
      <div className="itemprice">
        <b>{price * count} ₽ </b>
      </div>
      <div className="itemremove">
        <img src="../img/remove.svg" alt="remove" onClick={onClickRemove} />
      </div>
    </div>
  )
}

export default CartItem
