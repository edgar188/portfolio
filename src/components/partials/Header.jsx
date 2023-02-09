import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME, ABOUT, WORK, CONTACT } from '../../constants/paths';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaWindowClose } from '@react-icons/all-files/fa/FaWindowClose';
import Avatar from 'avataaars';
import SwitchMode from '../fields/SwitchMode';

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
            hairColor='Black'
            facialHairType='Blank'
            clotheType='GraphicShirt'
            graphicType='Diamond'
            clotheColor= 'Black'
            eyeType='Default'
            eyebrowType='DefaultNatural'
            mouthType='Smile'
          />
          <span className='ml-1'>Edgar Hovhannisyan</span>
        </a>
        <nav id='nav'>
          <ul className='dsp-flex'>
            <li>
              <NavLink to={ HOME } activeclassname='active' onClick={handleClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to={ ABOUT } activeclassname='active' onClick={handleClick}>About</NavLink>
            </li>
            <li>
              <NavLink to={ WORK } activeclassname='active' onClick={handleClick}>My Works</NavLink>
            </li>
            <li>
              <NavLink to={ CONTACT } activeclassname='active' onClick={handleClick}>Contact</NavLink>
            </li>
            <li>
              <SwitchMode />
            </li>
          </ul>
          <a className="btn-clear nav" onClick={handleClick}>
            <FaBars />
          </a>
          <a className="btn-clear close" onClick={handleClick}>
            <FaWindowClose />
          </a>
        </nav>
      </div>
    </header>
  )
}
