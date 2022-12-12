import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { selectFilter, setSearchValue } from '../../../redux/slices/filterSlice'
import styles from './Search.module.scss'

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const { searchValue } = useSelector(selectFilter)

  const onClickClear = () => {
    dispatch(setSearchValue(''))
  }

  return (
    <div>
      <div className={styles.block}>
        <img src="../img/search.svg" alt="search" />
        <input
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setSearchValue(e.target.value))
          }
          className={styles.input}
          type="text"
          placeholder="Поиск..."
        />
        {searchValue ? (
          <img
            onClick={onClickClear}
            className=""
            src="img/btn-remove.svg"
            alt="close"
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Search
