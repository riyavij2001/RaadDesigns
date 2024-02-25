import { useState } from 'react';
import reactLogo from './assets/react.svg';
import 'normalize.css';
import lipstick_bg from './Images/lipstick_bg.jpg'
import SOULBeautyLogo from './Images/SOULBeautyLogo.png'
import './App.css'

function Navbar() {
  return (
    <div style={{ padding: '0px' }}>
      <div style={{ backgroundImage: `url(${lipstick_bg})`, color: 'white', padding: '8px' }}>
        <div className=' animate-pulse' style={{ textAlign: 'center' }}>Get Free Shipping on orders above Rs.4000</div>
      </div>
      <div style={{ height: '13vh', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'sticky' }}>
        <img src={SOULBeautyLogo} width={150} height={30} style={{ padding: '10px' }}></img>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <a style={{ textDecoration: 'none' }} href=''>About Us</a>
          <a style={{ paddingLeft: '15px', textDecoration: 'none' }} href=''>About Us</a>
          <a style={{ paddingLeft: '15px', textDecoration: 'none' }} href=''>Gift Card</a>
          <a style={{ paddingLeft: '15px', textDecoration: 'none' }} href=''>Get our App</a>
          <a style={{ paddingLeft: '15px', textDecoration: 'none' }} href=''>Contact Us</a>
        </div>
      </div>
      <hr />
      <div style={{height:'35px', display: 'flex',justifyContent: 'center', alignItems: 'center', boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.5)'}}>
      <div style={{}}>
          <a style={{ textDecoration: 'none' }} href=''>Skincare</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>MakeUp</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>HairCare</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Appliances</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Bath & Body</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Natural</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Mom & Baby</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Nails</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Health & wellness</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Fragnance</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Men</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Beauty Advice</a>
          <a style={{ paddingLeft: '25px', textDecoration: 'none' }} href=''>Blogs</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
