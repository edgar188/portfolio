import React from 'react';
import Button from '@mui/material/Button';
import { rubberBand, flip } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
// import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
// import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { COLOR_BASE } from '../../constants/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_BASE
    }
  },
});

const styles = {
  rubberBand: {
    animation: '3s',
    animationName: Radium.keyframes(rubberBand, 'rubberBand')
  },
  flip: {
    animation: '1.5s',
    animationName: Radium.keyframes(flip, 'flip')
  }
}

export default function Home() {
  return (
    <section className='home'>
      <div className='text-center'>
        <StyleRoot>
          <h1 style={styles.flip}>Hi, I'm <span className='common-text'>Edgar</span>,</h1>
          <p>
            Software engineer specializing in the <span className='common-text'>Ruby</span> programming language and <span className='common-text'>Ruby on Rails</span> framework. 
            <br/>
            In addition, I've professional experience in front-end development.
          </p>
          <div style={styles.rubberBand} className='mt-8'>
            <Button theme={theme} color='primary' variant='outlined' size='large'>Download CV</Button>
          </div>
        </StyleRoot>  
        {/* <ul className='dsp-flex flex-center socials'>
          <li className='mr-3'>
            <a href=''>
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href=''>
              <FaLinkedin />
            </a>
          </li>
        </ul> */}
  
      </div>

    </section>
  )
}
