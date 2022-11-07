import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <div>
        <img src={props.image} alt="cheeseburger" />
        <b>{props.title}</b>
        <div className="optional-block">
          <ul>
            <li className="active">тонкое</li>
            <li>традиционное</li>
          </ul>
          <ul>
            <li className="active">25см</li>
            <li>30см</li>
            <li>35см</li>
          </ul>
        </div>
        <div className="price-block ">
          <div className="">
            <b>от {props.price} ₽</b>
          </div>
          <div className="">
            <img src="./img/add-btn.svg" alt="add" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
