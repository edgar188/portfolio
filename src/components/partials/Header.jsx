import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to={ HOME }>Home</Link>
            </li>
            <li className='ml-4'>
              <Link to={ WORK }>My Works</Link>
            </li>
            <li className='ml-4'>
              <Link to={ ABOUT }>About</Link>
            </li>
            <li className='ml-4'>
              <Link to={ CONTACT }>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
