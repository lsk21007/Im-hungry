import React, { useEffect, useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import section from '../images/section.jpeg'

function HeroSection() {
  const[state,setState]=useState(Math.floor(Math.random()*2));
  useEffect(()=>{
    setState(()=>Math.floor(Math.random()*2))
  },[]) 
  // console.log(state);
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
          redirect={state}
        >
          PRESS ME TO DECIDE EAT OR NOT
        </Button>
        {/* &emsp;&emsp;
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          PRESS ME TO DECIDE EAT OR NOT
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
