import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Shop from './pages/shop/Shop'
import Aboutus from './pages/aboutUs/Aboutus'
import VibeCheck from './pages/vibeCheck/VibeCheck'
import ContactUs from './pages/contactUs/ContactUs'


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
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouterInterface