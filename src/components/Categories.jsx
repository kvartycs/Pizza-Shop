import React from 'react'

const Categories = ({ items, value, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              key={`${name}+${index}`}
              onClick={() => onClickCategory(index)}
              className={value === index ? 'active' : ''}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Categories
