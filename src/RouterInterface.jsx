import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Shop from './pages/shop/Shop'
import Aboutus from './pages/aboutUs/Aboutus'
import VibeCheck from './pages/vibeCheck/VibeCheck'
import ContactUs from './pages/contactUs/ContactUs'
import Login from './pages/login/Login'


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
                path='/VibeCheck'
                element={
                    <VibeCheck />
                }
            />
            <Route 
                path='/ContactUs'
                element={
                    <ContactUs />
                }
            />
            <Route 
                path='/Login'
                element={
                    <Login />
                }
            />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouterInterface