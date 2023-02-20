import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/UI/Button/Button'
import fullPizzaSlice, {
  fetchFullPizza,
  selectFullPizzaData,
} from '../redux/slices/fullPizzaSlice'
import { useDispatch } from 'react-redux'

const FullPizza: React.FC = () => {
  const { id } = useParams()
  const { item } = useSelector(selectFullPizzaData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getFullPizza = async () => {
    //@ts-ignore
    dispatch(fetchFullPizza({ id }))
    console.log(id)
  }

  useEffect(() => {
    getFullPizza()
  }, [])

  if (!item.image && !item.price && !item.name) {
    return <h1>Загрузка...</h1>
  }
  return (
    <div className="fullpizza">
      <h1>{item.name}</h1>
      <img src={item.image} alt="" height={292} width={292} />
      <b>{item.price} ₽</b>
      <Link to="/Pizza-Shop/">
        <Button>Назад</Button>
      </Link>
    </div>
  )
}

export default FullPizza
