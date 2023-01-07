import React from 'react';
import Button from '@mui/material/Button';
import { lightSpeedIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  lightSpeedIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  }
}

export default function Home() {
  return (
    <section className='home'>
      <div className='text-center'>
        <h1>Hi, I'm Edgar,</h1>
        <p className='mt-2'>
          Software engineer specializing in the Ruby programming language and Ruby on Rails framework. 
          <br/>
          In addition, I've professional experience in front-end development.
        </p>
        <ul className='dsp-flex flex-center'>
          <li className='mr-3'>
            <a href=''>
              <i className="fa-brands fa-freebsd"></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className="fa-brands fa-freebsd"></i>
              <FontAwesomeIcon icon="fa-brands fa-freebsd" />
            </a>
          </li>
        </ul>
      </div>
      <StyleRoot>
        <div style={styles.lightSpeedIn}>
          <Button color='primary' variant='outlined' size='medium'>Primary</Button>
        </div>
      </StyleRoot>    
    </section>
  )
}
