import React from 'react'
import { useState } from 'react'
import Button from './UI/Button/Button'

function Card(props) {
  const [addedCount, setAddedCount] = useState(0)
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const typeItems = ['тонкое', 'традиционное']
  const incrementor = () => {
    setAddedCount(addedCount + 1)
    console.log(addedCount)
  }
  return (
    <div className="card">
      <div>
        <img src={props.image} width={260} height={260} alt="cheeseburger" />
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
          <div className="" onClick={incrementor}>
            <Button>
              Добавить {addedCount > 0 ? <i>{addedCount}</i> : <b></b>}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
