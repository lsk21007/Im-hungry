import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import section from '../images/section.jpeg'

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={section}/>
      <h1>I'm hungry now!</h1>
      <p>Why I'm so hungry at 10pm?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          TO EAT
        </Button>
        &emsp;&emsp;
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          OR NOT
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
