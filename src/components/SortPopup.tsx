import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChoosenSort } from '../redux/slices/filterSlice'

const SortPopup: React.FC = () => {
  const dispatch = useDispatch()

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setChoosenSort(event.target.value))
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
