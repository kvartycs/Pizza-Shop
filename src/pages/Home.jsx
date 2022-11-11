import React from 'react'
import Card from '../components/Card'
import Categories from '../components/Categories'
import SortPopup from '../components/SortPopup'

const Home = () => {
  const arr = [
    {
      id: 1,
      title: 'Чизбургер-пицца',
      price: 395,
      image: './img/pizza/cheesburger.svg',
    },
    { id: 2, title: 'Сырная', price: 450, image: './img/pizza/cheese.svg' },
    {
      id: 3,
      title: 'Креветки по-азиатски',
      price: 290,
      image: './img/pizza/shrimp.svg',
    },
    {
      id: 4,
      title: 'Сырный цыпленок',
      price: 385,
      image: './img/pizza/cheese chicken.svg',
    },
    {
      id: 5,
      title: 'Чизбургер-пицца',
      price: 395,
      image: './img/pizza/cheesburger.svg',
    },
    { id: 6, title: 'Сырная', price: 450, image: './img/pizza/cheese.svg' },
    {
      id: 7,
      title: 'Креветки по-азиатски',
      price: 290,
      image: './img/pizza/shrimp.svg',
    },
    {
      id: 8,
      title: 'Сырный цыпленок',
      price: 385,
      image: './img/pizza/cheese chicken.svg',
    },
  ]
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
        {arr.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            key={item.id}
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default Home
