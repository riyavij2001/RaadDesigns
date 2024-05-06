import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Shop from './pages/shop/Shop'
import Aboutus from './pages/aboutUs/Aboutus'


const RouterInterface = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                element={
                    <App />
                }
            />
            <Route 
                path='/shop'
                element={
                    <Shop />
                }
            />
            <Route 
                path='/aboutUs'
                element={
                    <Aboutus />
                }
            />
            <Route 
                path='/home'
                element={
                    <App />
                }
            />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouterInterface