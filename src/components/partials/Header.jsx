import React from 'react';
import { Link } from 'react-router-dom';
import { HOME, WORK, ABOUT, CONTACT } from '../../constants/paths';

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to={ HOME }>Home</Link>
        </li>
        <li>
          <Link to={ WORK }>My Works</Link>
        </li>
        <li>
          <Link to={ ABOUT }>About</Link>
        </li>
        <li>
          <Link to={ CONTACT }>Contact</Link>
        </li>
      </ul>
    </div>
  )
}
