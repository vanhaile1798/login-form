import React from 'react';
import TopNav from './TopNav';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className='main'>
      <TopNav/>
      <div className='main__image-holder'>
        <img className='main__img' src='https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1443527216320-7e744084f5a7-1.jpg' />
        <div className='main__content-wrapper'>
          <div className='main__content'>
            <h2 className='main__title'>We Change Everything Wordpress</h2>
            <p className='main__content-description'>This is the only Wordpress theme you will ever want to use.</p>
            <Link className='main__content-link main__login-btn' to='/login'>Log in</Link>
            <Link className='main__content-link main__signup-btn' to='/signup'>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
