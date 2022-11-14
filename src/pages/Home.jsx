import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'
import axios from 'axios'

import Skeleton from '../components/Skeleton'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fecthData() {
      try {
        setIsLoading(true)
        const [itemsResponse] = await Promise.all([
          axios.get('https://636f205cf2ed5cb047d607ba.mockapi.io/items'),
        ])
        setIsLoading(false)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Error: ', error)
      }
    }
    fecthData()
  }, [])
  console.log(items)
  return (
    <div className="content">
      <div className="sorting">
        <Categories
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        ></Categories>
        <SortPopup></SortPopup>
      </div>
      <h2>Все пиццы</h2>
      <div className="cards">
        {isLoading
          ? [...new Array(8)].map((_, index) => (
              <Skeleton key={index}></Skeleton>
            ))
          : items.map((item) => (
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
