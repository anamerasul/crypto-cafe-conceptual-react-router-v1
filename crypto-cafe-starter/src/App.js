import React from 'react'
import HomePage from './components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>

        <Route path="/contract" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  )
}

export default App