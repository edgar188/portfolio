import React from 'react';
import Button from '@mui/material/Button';
import { rubberBand, flipInY } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import RESUME from '../../assets/files/Edgar_Hovhannisyan_resume.pdf';

const styles = {
  rubberBand: {
    animation: '2s',
    animationName: Radium.keyframes(rubberBand, 'rubberBand')
  },
  flipInY: {
    animation: '2s',
    animationName: Radium.keyframes(flipInY, 'flipInY')
  }
}

export default function Home() {
  return (
    <section className='home container'>
      <div className='text-center'>
        <StyleRoot>
          <h1 style={ styles.flipInY }>Hi, I'm <span className='common-text'>Edgar</span>,</h1>
          <p>
            Software engineer specializing in the <span className='common-text'>Ruby</span> programming language and <span className='common-text'>Ruby on Rails</span> framework. 
            <br/>
            In addition, I've professional experience in front-end development. I'm focused on developing scalable and clean code. 
            <br/>
            I like to work in a team, but can also lead projects on my own.
          </p>
          <div style={ styles.rubberBand }>
            <Button href={ RESUME } variant='outlined' size='large' download>RESUME</Button>
          </div>
        </StyleRoot>
      </div>
    </section>
  )
}
