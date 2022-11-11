import React from 'react'
import { useState } from 'react'

const SortPopup = () => {
  return (
    <div className="sort">
      <b>Сортировать по: </b>
      <select name="" id="">
        <option value="0">по популярности</option>
        <option value="0">по цене</option>
        <option value="0">по алфавиту</option>
      </select>
    </div>
  )
}

export default SortPopup
