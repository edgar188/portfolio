import React from 'react';
import Button from '@mui/material/Button';
import { lightSpeedIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  lightSpeedIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  }
}

export default function Home() {
  return (
    <StyleRoot>
      <h2>Homeeeee</h2>
      <div style={styles.lightSpeedIn}>
        <Button color='primary' variant='outlined' size='medium'>Primary</Button>
      </div>
    </StyleRoot>    
  )
}
