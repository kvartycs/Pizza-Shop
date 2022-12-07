import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, setPrice } from '../redux/slices/cartSlice'
import Button from './UI/Button/Button'

function Card(props) {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === props.id)
  )
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const typeItems = ['тонкое', 'традиционное']

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item = {
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.price,
      type: typeItems[activeType],
      size: props.sizes[activeSize],
    }
    dispatch(addItem(item))
    dispatch(setPrice(item.price))
  }
  return (
    <div className="pizza-block-wrapper">
      <div className="card">
        <div>
          <img src={props.image} width={260} height={260} alt="pizza" />
          <b>{props.name}</b>
          <div className="optional-block">
            <ul>
              {props.types.map((type, id) => (
                <li
                  key={type}
                  onClick={() => setActiveType(id)}
                  className={activeType === id ? 'active' : ''}
                >
                  {typeItems[type]}
                </li>
              ))}
            </ul>
            <ul>
              {props.sizes.map((size, id) => (
                <li
                  key={size}
                  onClick={() => setActiveSize(id)}
                  className={activeSize === id ? 'active' : ''}
                >
                  {size} см
                </li>
              ))}
            </ul>
          </div>
          <div className="price-block ">
            <div className="">
              <b>от {props.price} ₽</b>
            </div>
            <div className="">
              <Button onClick={onClickAdd}>
                Добавить {addedCount > 0 ? <i>{addedCount}</i> : <b></b>}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
