import React, { useState } from 'react'
import Card from '../components/Card'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'

import { useSelector, useDispatch } from 'react-redux'
import {
  setChoosenCategorie,
  setChoosenSort,
} from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzaSlice'
import Skeleton from '../components/Skeleton'
import Search from '../components/UI/Search/Search'
import { useContext } from 'react'
import AppContext from '../context'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useDispatch()

  const choosenCategorie = useSelector((state) => state.filter.choosenCategorie)
  const { searchValue } = useContext(AppContext)
  const onChangeCategory = (id) => {
    dispatch(setChoosenCategorie(id))
  }
  const choosenSort = useSelector((state) => state.filter.choosenSort)
  const onChangeSort = (value) => {
    dispatch(setChoosenSort(value))
  }

  const { items, status } = useSelector((state) => state.pizza)

  const getPizzas = async () => {
    dispatch(fetchPizzas({ choosenCategorie, choosenSort, searchValue }))
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getPizzas()
  }, [])
  console.log(items)
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
        <SortPopup value={choosenSort} onClickSort={onChangeSort}></SortPopup>
      </div>
      <h2>Все пиццы</h2>
      <div className="cards">
        {status === 'loading'
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
              .map((item, id) => (
                <Card
                  id={id}
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
