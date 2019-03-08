import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function TopNav() {
  return(
    <div className='topnav'>
      <div className='topnav__container'>
        <div className='topnav__logo-wrapper'>
          <img className='topnav__logo' src='https://images.unsplash.com/photo-1550852355-d04aff81523b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9' />
          <h1 className='topnav__title'>Colorlib</h1>
        </div>
        <nav className='topnav__item-list'>
          <Link className='topnav__item' to='/'>Home</Link>
          <Link className='topnav__item' to='/'>Blog</Link>
          <Link className='topnav__item' to='/'>Portfolio</Link>
          <Link className='topnav__item' to='/'>About the tests</Link>
          <Link className='topnav__item' to='/'>Level 1</Link>
          <Link className='topnav__item' to='/'>Shop</Link>
        </nav>
      </div>
    </div>
  )
}

export default TopNav;
