import React from 'react';
import { FaSkype } from '@react-icons/all-files/fa/FaSkype';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaAt } from '@react-icons/all-files/fa/FaAt';
import { FaFile } from '@react-icons/all-files/fa/FaFile';
import { EMAIL, LINKEDIN, GITHUB, SKYPE } from '../../constants/links';
import RESUME from '../../assets/files/Edgar_Hovhannisyan_resume.pdf';

export default function Contact() {
  return (
    <section className='contact container pt-6 pb-4'>
      <div>
        <h3 className='text-center'>GET IN TOUCH WITH ME</h3>
        <ul className='socials mt-5'>
          <li>
            <a href={ EMAIL }>
              <FaAt className='email' />
              <span>edgar.hovhannisyan08@gmail.com</span>
            </a>
          </li>
          <li>
            <a href={ LINKEDIN } target='blank'>
              <FaLinkedinIn className='linkedin' />
              <span>edgar-hovhannisyan-8b970b192</span>
            </a>
          </li>
          <li>
            <a href={ GITHUB } target='blank'>
              <FaGithub className='github' />
              <span>edgar188</span>
            </a>
          </li>
          <li>
            <a href={ SKYPE } target='blank'>
              <FaSkype className='skype' />
              <span>Edgar Hovhannisyan</span>
            </a>
          </li>
          <li>
            <a href={ RESUME } download>
              <FaFile className='resume'/>
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
