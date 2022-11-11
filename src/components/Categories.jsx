import React from 'react'
import { useState } from 'react'

const Categories = ({ items }) => {
  const [choosenCategorie, setChoosenCategorie] = useState(null)

  console.log(choosenCategorie)
  console.log(Boolean())
  return (
    <div className="categories">
      <button
        onClick={() => setChoosenCategorie(null)}
        className={choosenCategorie === null ? 'active' : ''}
      >
        Все
      </button>
      {items &&
        items.map((name, index) => (
          <button
            key={`${name}+${index}`}
            onClick={() => setChoosenCategorie(index)}
            className={choosenCategorie === index ? 'active' : ''}
          >
            {name}
          </button>
        ))}
    </div>
  )
}

export default Categories
