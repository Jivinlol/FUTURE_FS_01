import React from 'react'
import './Hero.css'
import html from './images/html5-logo.png'
const Hero = () => {
  return (
    <div className='content'>
        <div className='contentpart1'>
            <div className='Rotational'>
                <div className='Cont'>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                </div>
                <div className='Cont'>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                </div>
                <div className='Cont'>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'><img src={html} /></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                </div>
                <div className='Cont'>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                </div>
                <div className='Cont'>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                  <div className='imgdiv'></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero;
