import React from 'react'

type CategoriesProps = {
  value: number
  onClickCategory: (index: number) => void
  items: string[]
}

const Categories: React.FC<CategoriesProps> = ({
  items,
  value,
  onClickCategory,
}) => {
  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((name: string, index: number) => (
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
