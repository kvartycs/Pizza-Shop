import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import axios from 'axios'

import Skeleton from '../components/Skeleton'
import Search from '../components/UI/Search/Search'
import { useContext } from 'react'
import AppContext from '../context'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [choosenCategorie, setChoosenCategorie] = useState(0)
  const [choosenSort, setChoosenSort] = useState(0)
  const { searchValue } = useContext(AppContext)

  useEffect(() => {
    async function fecthData() {
      try {
        setIsLoading(true)
        const [itemsResponse] = await Promise.all([
          axios.get(
            `https://636f205cf2ed5cb047d607ba.mockapi.io/items?${
              choosenCategorie > 0 ? `category=${choosenCategorie}` : ''
            }&sortBy=${choosenSort ? choosenSort.replace('-', '') : ''}&order=${
              choosenSort ? (choosenSort.includes('-') ? 'asc' : 'desc') : ''
            }`
          ),
        ])
        setIsLoading(false)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Error: ', error)
      }
    }
    fecthData()
    window.scrollTo(0, 0)
  }, [choosenCategorie, choosenSort])

  return (
    <div className="content">
      <div className="sorting">
        <Categories
          items={[
            'Все',
            'Мясные',
            'Вегетарианские',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}
          value={choosenCategorie}
          onClickCategory={setChoosenCategorie}
        ></Categories>
        <Search></Search>
        <SortPopup value={choosenSort} onClickSort={setChoosenSort}></SortPopup>
      </div>
      <h2>Все пиццы</h2>
      <div className="cards">
        {isLoading
          ? [...new Array(8)].map((_, index) => (
              <Skeleton key={index}></Skeleton>
            ))
          : items
              .filter((item) => {
                if (
                  item.name.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return true
                } else {
                  return false
                }
              })
              .map((item) => (
                <Card
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  key={item.id}
                  sizes={item.sizes}
                  types={item.types}
                ></Card>
              ))}
      </div>
    </div>
  )
}

export default Home
