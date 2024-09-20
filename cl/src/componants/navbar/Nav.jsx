import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const [Screan,setScrean]=useState(false)
  return (
    <header className='container p-4 bg-black text-white w-full'>
      <nav className="flex justify-between items-center">
        <Link className="text-3xl font-bold" to='/'>Logo</Link>
        <ul className='menu flex gap-5'>
          <li className='menu__item hover:text-blue-300 cursor-pointer'>
            <Link to='/'>Home</Link>
          </li>
          <li className='menu__item hover:text-blue-300 cursor-pointer'>
            <Link to='/sign-up'>Sign-up</Link>
          </li>
          <li className='menu__item hover:text-blue-300 cursor-pointer'>
            <Link to='/log-in'>Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
