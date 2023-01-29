import React from 'react';
import Button from '@mui/material/Button';
import { rubberBand, flipInY } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { createTheme } from '@mui/material/styles';
import { COLOR_BASE } from '../../constants/colors';
import RESUME from '../../assets/images/resume.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_BASE
    }
  },
});

const styles = {
  rubberBand: {
    animation: '2s',
    animationName: Radium.keyframes(rubberBand, 'rubberBand')
  },
  flipInY: {
    animation: '1s',
    animationName: Radium.keyframes(flipInY, 'flipInY')
  }
}

export default function Home() {
  return (
    <section className='home'>
      <div className='text-center'>
        <StyleRoot>
          <h1 style={ styles.flipInY }>Hi, I'm <span className='common-text'>Edgar</span>,</h1>
          <p>
            Software engineer specializing in the <span className='common-text'>Ruby</span> programming language and <span className='common-text'>Ruby on Rails</span> framework. 
            <br/>
            In addition, I've professional experience in front-end development.
          </p>
          <div style={ styles.rubberBand } className='mt-8'>
            <Button href={ RESUME } theme={ theme } color='primary' variant='outlined' size='large' download>Download CV</Button>
          </div>
        </StyleRoot>
      </div>
    </section>
  )
}
