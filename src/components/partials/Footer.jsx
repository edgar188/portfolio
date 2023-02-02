import React from 'react';
import { LINKEDIN, GITHUB } from '../../constants/links';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

export default function Footer() {
  return (
    <footer className='container pt-4 pb-4'>
      <div className='dsp-flex flex-center alg-center'>
        <div>&copy; 2023 Edgar Hovhannisyan</div>
        <ul className='dsp-flex flex-center ml-2'>
          <li className='mr-2'>
            <a href={ LINKEDIN } target='blank'>
              <FaLinkedinIn className='linkedin' />
            </a>
          </li>
          <li>
            <a href={ GITHUB } target='blank'>
              <FaGithub className='github' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
