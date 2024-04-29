import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Shop from './pages/shop/Shop'


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
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouterInterface