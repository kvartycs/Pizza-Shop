import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import AppContext from '../../../context'
import styles from './Search.module.scss'

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext)

  const inputRef = useRef(555)
  const onClickClear = () => {
    setSearchValue('')
    inputRef.current.focus()
  }

  return (
    <div>
      <div className={styles.block}>
        <img src="../img/search.svg" alt="search" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Поиск..."
        />
        {searchValue && (
          <img
            ref={inputRef}
            onClick={onClickClear}
            className=""
            src="img/btn-remove.svg"
            alt="close"
          />
        )}
      </div>
    </div>
  )
}

export default Search
