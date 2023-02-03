import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME, ABOUT, WORK, CONTACT } from '../../constants/paths';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaWindowClose } from '@react-icons/all-files/fa/FaWindowClose';
import Avatar from 'avataaars';

export default function Header() {
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
        <nav>
          <ul className='dsp-flex'>
            <li>
              <NavLink to={ HOME } activeClassName='active'>Home</NavLink>
            </li>
            <li className='ml-5'>
              <NavLink to={ ABOUT } activeClassName='active'>About</NavLink>
            </li>
            <li className='ml-5'>
              <NavLink to={ WORK } activeClassName='active'>My Works</NavLink>
            </li>
            <li className='ml-5'>
              <NavLink to={ CONTACT } activeClassName='active'>Contact</NavLink>
            </li>
          </ul>
          <a class="btn-clear nav" id="btn-nav">
            <FaBars />
          </a>
          <a class="btn-clear close" id="btn-close">
            <FaWindowClose />
          </a>
        </nav>
      </div>
    </header>
  )
}
