import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME, ABOUT, WORK, CONTACT } from '../../constants/paths';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaWindowClose } from '@react-icons/all-files/fa/FaWindowClose';
import Avatar from 'avataaars';

export default function Header() {
  function handleClick() {
    let nav = document.getElementById('nav');
    nav.className = nav.classList.contains('show') ? '' : 'show';
  }

  return (
    <header className='container pt-4 pb-4'>
      <div className='dsp-flex space-between alg-self-end'>
        <a href={ HOME } className='logo-link'>
          <Avatar
            className='logo'
            avatarStyle='Transparent'
            topType='ShortHairShortCurly'
            accessoriesType='Blank'
            hairColor='Black'
            facialHairType='Blank'
            clotheType='Hoodie'
            clotheColor='Red'
            eyeType='Default'
            eyebrowType='DefaultNatural'
            mouthType='Smile'
            skinColor='Pale'
          />
          <span className='ml-1'>Edgar Hovhannisyan</span>
        </a>
        <nav id='nav'>
          <ul className='dsp-flex'>
            <li>
              <NavLink to={ HOME } activeClassName='active' onClick={handleClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to={ ABOUT } activeClassName='active' onClick={handleClick}>About</NavLink>
            </li>
            <li>
              <NavLink to={ WORK } activeClassName='active' onClick={handleClick}>My Works</NavLink>
            </li>
            <li>
              <NavLink to={ CONTACT } activeClassName='active' onClick={handleClick}>Contact</NavLink>
            </li>
          </ul>
          <a class="btn-clear nav" onClick={handleClick}>
            <FaBars />
          </a>
          <a class="btn-clear close" onClick={handleClick}>
            <FaWindowClose />
          </a>
        </nav>
      </div>
    </header>
  )
}
