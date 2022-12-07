import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Cart from './pages/Cart'
import Home from './pages/Home'

import NotFound from './components/UI/NotFound/NotFound'
import { useState } from 'react'

import AppContext from './context'

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="App">
        <div className="wrapper clear">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
