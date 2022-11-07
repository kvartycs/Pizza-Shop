import React from 'react'
import Card from './components/Card'
import Header from './components/Header'

function App() {
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
    <div className="App">
      <div className="wrapper clear">
        <Header></Header>
        <div className="line"></div>

        <div className="content">
          <div className="sorting">
            <div className="buttons">
              <button className="active">Все</button>
              <button>Мясные</button>
              <button>Вегетарианская</button>
              <button>Гриль</button>
              <button>Острые</button>
              <button>Закрытые</button>
            </div>
            <div className="sort">
              <b>Сортировать по: </b>
              <select name="" id="">
                <option value="">по популярности</option>
                <option value="">по цене</option>
                <option value="">по алфавиту</option>
              </select>
            </div>
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
      </div>
    </div>
  )
}

export default App
