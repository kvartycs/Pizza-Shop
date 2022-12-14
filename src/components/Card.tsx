import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  addItem,
  ICartItem,
  selectCartItemById,
} from '../redux/slices/cartSlice'
import Button from './UI/Button/Button'

type CardProps = {
  id: string
  price: number

  image: string
  name: string
  types: number[]
  sizes: number[]
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  image,
  price,
  types,
  sizes,
}) => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItemById(id))
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const typeItems = ['тонкое', 'традиционное']

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item: ICartItem = {
      id: id,
      name: name,
      image: image,
      price: price,
      type: typeItems[activeType],
      size: sizes[activeSize],
      count: 0,
    }
    dispatch(addItem(item))
  }
  return (
    <div className="pizza-block-wrapper">
      <div className="card">
        <div>
          <Link to={`/pizza/${id}`} key={id}>
            <img src={image} width={260} height={260} alt="pizza" />
            <b>{name}</b>
          </Link>
          <div className="optional-block">
            <ul>
              {types.map((type, id) => (
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
              {sizes.map((size, id) => (
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
              <b>от {price} ₽</b>
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
