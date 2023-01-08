import React from 'react';
import { GITHUB, LINKEDIN } from '../../constants/links';
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

export default function Footer() {
  return (
    <footer className='pt-4 pb-4'>
      <div className='container dsp-flex flex-center alg-center'>
        <div>&copy; 2023 Edgar Hovhannisyan</div>
        <ul className='dsp-flex flex-center ml-2'>
          <li className='mr-2'>
            <a href={ GITHUB } target='blank'>
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href={ LINKEDIN} target='blank'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
