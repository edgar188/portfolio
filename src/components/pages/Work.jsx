import React from 'react';
import { GIT_LINKS } from '../../constants/links';
import RUBY_IMG from '../../assets/images/ruby.png';
import REACT_RPOJECT_IMG from '../../assets/images/react.png';
import TETRIS_IMG from '../../assets/images/tetris.png';
import TO_DO_APP_IMG from '../../assets/images/to-do-app.png';
import SLIDE_IMG from '../../assets/images/slide.png';

export default function Work() {
  return (
    <section className='work pt-5 pb-5'>
      <div className='container'>
        <h3>CHECK OUT SOME OF MY WORK</h3>
        <ul className='works-list'>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.rubyInternship } target='blank'>
              <img src={RUBY_IMG} alt='Ruby img' />
              <span className='pl-2'>Ruby internship program at STDev</span>
            </a>
            <p className='mt-2'>I'm proud to have excelled in the Ruby internship program which lasts three months as a mentor at STDev. 
              The internship program was managed by me depending on my knowledge and experience. I chose a learning approach with my future colleagues from scratch and gradual growth.
              <br/>
              In the course of our work, we introduced the basic principles of web development and solved various kinds of problems. 
              <br/>
              In the repository above, you can watch what we managed to do during the program and easily use the resources for your needs.
            </p>
          </li>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.reactProject } target='blank'>
              <img src={REACT_RPOJECT_IMG} alt='React img' />
              <span className='pl-2'>React project</span>
            </a>
            <p className='mt-2'>
              A simple project was created a few years ago. The main technologies used are React and Firebase.
            </p>
          </li>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.tetris } target='blank'>
              <img src={TETRIS_IMG} alt='Tetris img' />
              <span className='pl-2'>Tetris</span>
            </a>
            <p className='mt-2'>
              One of my favorite games was written in pure JS.
            </p>
          </li>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.toDoApp } target='blank'>
              <img src={TO_DO_APP_IMG} alt='To-Do-App img' />
              <span className='pl-2'>To-Do List App</span>
            </a>
            <p className='mt-2'>
              Simple To-Do List App was written in pure JS.
            </p>
          </li>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.carousel } target='blank'>
              <img src={SLIDE_IMG} alt='Carousel slide img' />
              <span className='pl-2'>Carousel Slide Show</span>
            </a>
            <p className='mt-2'>
              Simple Carousel Slide Show was written in pure JS.
            </p>
          </li>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.layout_1 } target='blank'>
              <img src={SLIDE_IMG} alt='Layout img' />
              <span className='pl-2'>Layout 1</span>
            </a>
            <p className='mt-2'>
              Simple layout was written in pure HTML/SASS.
            </p>
          </li>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.layout_2 } target='blank'>
              <img src={SLIDE_IMG} alt='Layout img' />
              <span className='pl-2'>Layout 2</span>
            </a>
            <p className='mt-2'>
              Simple layout was written in pure HTML/SASS.
            </p>
          </li>
          <li>
            <a className='dsp-flex alg-self-end title-link' href={ GIT_LINKS.layout_3 } target='blank'>
              <img src={SLIDE_IMG} alt='Layout img' />
              <span className='pl-2'>Layout 3</span>
            </a>
            <p className='mt-2'>
              Simple layout was written in pure HTML/SASS.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
