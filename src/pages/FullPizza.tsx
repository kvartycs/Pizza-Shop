import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/UI/Button/Button'

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    image: string
    name: string
    price: number
  }>()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://636f205cf2ed5cb047d607ba.mockapi.io/items/' + id
        )
        setPizza(data)
      } catch (error) {
        navigate('/')
        console.error(error)
        alert('Ошибка при получении пиццы')
      }
    }
    fetchPizza()
  }, [])

  if (!pizza) {
    return <h1>Загрузка...</h1>
  }
  return (
    <div className="fullpizza">
      <h1>{pizza.name}</h1>
      <img src={pizza.image} alt="" height={292} width={292} />
      <b>{pizza.price} ₽</b>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  )
}

export default FullPizza
