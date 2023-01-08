import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HOME, WORK, ABOUT, CONTACT } from '../../constants/paths';

export default function Header() {
  return (
    <header className='pt-5 pb-5'>
      <div className='container dsp-flex space-between alg-center'>
        <a href={ HOME }>
          {/* <img className='logo' src='#' alt='Logo' /> */}
          <span className='logo'>E</span>
        </a>
        <nav>
          <ul className='dsp-flex'>
            <li>
              <NavLink to={ HOME } activeClassName='active'>Home</NavLink>
            </li>
            <li className='ml-5'>
              <NavLink to={ WORK } activeClassName='active'>My Works</NavLink>
            </li>
            <li className='ml-5'>
              <NavLink to={ ABOUT } activeClassName='active'>About</NavLink>
            </li>
            <li className='ml-5'>
              <NavLink to={ CONTACT } activeClassName='active'>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
