import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HOME, ABOUT, WORK, CONTACT } from '../../constants/paths';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaWindowClose } from '@react-icons/all-files/fa/FaWindowClose';
import Avatar from 'avataaars';
import SwitchMode from '../fields/SwitchMode';

export default function Header() {
  const [modeChecked, setModeChecked] = useState(getModeCheckedValue());
  
  useEffect(() => {
    if (modeChecked) {
      let app = document.getElementById('app');
      app.classList.add('dark');
    }
  }, [])

  function handleModeChange(e) {
    let checked = e.currentTarget.checked;
    setModeChecked(checked);
    localStorage.setItem('modeChecked', checked);
   
    let app = document.getElementById('app');
    checked ? app.classList.add('dark') : app.classList.remove('dark');
  }

  function handleClick() {
    let nav = document.getElementById('nav');
    nav.className = nav.classList.contains('show') ? '' : 'show';
  }

  function getModeCheckedValue() {
    return localStorage.getItem('modeChecked') === 'true';
  }
  
  return (
    <header className='container pt-4 pb-4'>
      <div className='dsp-flex space-between alg-self-end'>
        <a href={ HOME } className='logo-link'>
          <Avatar
            className='logo'
            avatarStyle='Transparent'
            topType='ShortHairShortRound'
            hairColor='Black'
            facialHairType='Blank'
            clotheColor={ modeChecked ? 'Blue03' : 'Red' }
            clotheType={ modeChecked ? 'Hoodie' : 'GraphicShirt' }
            graphicType='Diamond'
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
              <SwitchMode modeChecked={modeChecked} handleModeChange={handleModeChange} />
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
