import React, { useState } from 'react'
import Card from '../components/Card'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'

import { useSelector, useDispatch } from 'react-redux'
import {
  selectFilter,
  selectSort,
  setChoosenCategorie,
} from '../redux/slices/filterSlice'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice'
import Skeleton from '../components/Skeleton'
import Search from '../components/UI/Search/Search'
import { useEffect } from 'react'
import NotFound from '../components/UI/NotFound/NotFound'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const { choosenCategorie, searchValue } = useSelector(selectFilter)

  const onChangeCategory = (id: number) => {
    dispatch(setChoosenCategorie(id))
  }

  const { items, status } = useSelector(selectPizzaData)
  const choosenSort = useSelector(selectSort)

  const getPizzas = async () => {
    dispatch(fetchPizzas({ choosenCategorie, choosenSort, searchValue }))
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getPizzas()
  }, [choosenCategorie, choosenSort, searchValue])

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
          onClickCategory={onChangeCategory}
        ></Categories>
        <Search></Search>
        <SortPopup></SortPopup>
      </div>
      <h2>Все пиццы</h2>
      {status === 'error' ? (
        <NotFound></NotFound>
      ) : (
        <div className="cards">
          {status === 'loading'
            ? [...new Array(8)].map((_, index) => (
                <Skeleton key={index}></Skeleton>
              ))
            : items
                .filter((item: { name: string }) => {
                  if (
                    item.name.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return true
                  } else {
                    return false
                  }
                })
                .map((item, id) => (
                  <Card
                    id={String(id)}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    sizes={item.sizes}
                    types={item.types}
                  ></Card>
                ))}
        </div>
      )}
    </div>
  )
}

export default Home
