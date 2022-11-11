import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Button from './components/UI/Button/Button'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <div className="wrapper clear">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
