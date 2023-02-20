import React from 'react'
import { useDispatch } from 'react-redux'
import {
  addItem,
  ICartItem,
  minusItem,
  removeItem,
} from '../redux/slices/cartSlice'

type CartIemProps = {
  id: string
  price: number
  count: number
  image: string
  name: string
  type: number
  size: number
}

const CartItem: React.FC<CartIemProps> = ({
  id,
  price,
  count,
  image,
  name,
  type,
  size,
}) => {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(addItem({ id } as ICartItem))
  }
  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }
  const nothing = () => {
    return
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
        <img
          src="img/minus.svg"
          alt="minus"
          onClick={count > 1 ? onClickMinus : nothing}
        />
        <b>{count}</b>
        <img src="img/plus.svg" alt="plus" onClick={onClickPlus} />
      </div>
      <div className="itemprice">
        <b>{price * count} ₽ </b>
      </div>
      <div className="itemremove">
        <img src="img/remove.svg" alt="remove" onClick={onClickRemove} />
      </div>
    </div>
  )
}

export default CartItem
