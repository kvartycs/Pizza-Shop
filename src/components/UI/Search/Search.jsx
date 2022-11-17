import React from 'react'
import { useContext } from 'react'
import AppContext from '../../../context'
import styles from './Search.module.scss'

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext)

  return (
    <div>
      <div className={styles.block}>
        <img src="../img/search.svg" alt="search" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.input}
          type="text"
          name=""
          id=""
          placeholder="Поиск..."
        />
      </div>
    </div>
  )
}

export default Search
