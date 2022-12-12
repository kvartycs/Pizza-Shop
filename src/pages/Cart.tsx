import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems, selectCart } from '../redux/slices/cartSlice'
import CartEmpty from '../components/CartEmpty'

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(selectCart)
  const onClickClear = () => {
    dispatch(clearItems())
  }
  const totalCount = items.reduce(
    (sum: number, item: { count: number }) => sum + item.count,
    0
  )

  if (!totalPrice) {
    return <CartEmpty></CartEmpty>
  }

  return (
    <div className="cart">
      <div className="cartcontent">
        <div className="cartheader">
          <div className="cartside">
            <img src="../img/cartblack.svg" alt="cart" width={29} height={29} />
            <b>Корзина</b>
          </div>
          <div className="deleteside" onClick={onClickClear}>
            <img src="../img/delete.svg" alt="delete" width={20} height={20} />

            <p>Очистить корзину</p>
          </div>
        </div>
        <div className="cartitems">
          {items.map((item: any) => (
            <CartItem key={item.id} {...item}></CartItem>
          ))}
        </div>
        <div className="total">
          <div className="amount">
            Всего пицц: <b>{totalCount} шт</b>
          </div>
          <div className="price">
            Сумма заказа: <b>{totalPrice} ₽</b>
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
