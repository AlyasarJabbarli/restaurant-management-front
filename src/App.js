import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import TableCustomazing from './pages/TableCustomazing'
import UserRegister from './pages/UserRegister'
import RestaurantCustomazing from './pages/RestaurantCustomazing'
import Restaurants from './pages/Restaurants'
import TableOrder from './pages/TableOrder'
import Couriers from './pages/Couriers'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/orders' element={<Dashboard />} />
          <Route path='/customers' element={<Dashboard />} />
          <Route path='/cash-register' element={<Dashboard />} />
          <Route path='/settings' element={<Dashboard />} />
          <Route path='/restaurants' element={<Restaurants />} />
          <Route path='/table-customazing' element={<TableCustomazing />} />
          <Route path='/table-customazing/:id' element={<TableCustomazing />} />
          <Route path='/user-customazing' element={<UserRegister />} />
          <Route path='/user-customazing/:id' element={<UserRegister />} />
          <Route path='/restaurant-customazing' element={<RestaurantCustomazing />} />
          <Route path='/restaurant-customazing/:id' element={<RestaurantCustomazing />} />
          <Route path='/table-order/:id' element={<TableOrder />} />
          <Route path='/couriers' element={<Couriers />} />


        </Routes>
      </BrowserRouter>
    )
  }
}

export default App