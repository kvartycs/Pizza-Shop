import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'

const Cart = React.lazy(() => import('./pages/Cart'))
const FullPizza = React.lazy(() => import('./pages/FullPizza'))
const NotFound = React.lazy(() => import('./components/UI/NotFound/NotFound'))

function App() {
  return (
    <div className="App">
      <div className="wrapper clear">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                <Cart></Cart>
              </Suspense>
            }
          ></Route>
          <Route
            path="/pizza/:id"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <FullPizza></FullPizza>
              </Suspense>
            }
          ></Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <NotFound></NotFound>
              </Suspense>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
