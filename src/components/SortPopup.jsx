import React from 'react'

const SortPopup = ({ value, onClickSort }) => {
  const changeSelect = (event) => {
    onClickSort(event.target.value)
  }

  return (
    <div className="sort">
      <b>Сортировка: </b>
      <select name="" id="" onChange={changeSelect}>
        <option value="rating">по популярности</option>
        <option value="-price">сначала недорогие</option>
        <option value="price">сначала дорогие</option>
        <option value="-name">по алфавиту</option>
      </select>
    </div>
  )
}

export default SortPopup
