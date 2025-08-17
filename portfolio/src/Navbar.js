import React, { useRef } from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './Navbar.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const navref = useRef();
  useGSAP(()=>{
      gsap.from(navref.current,{
        y:20,
        opacity:0,
        delay:1.2
      });
  },{scope:navref})
  return (
    <div className='NavBar' ref={navref}>
      <div className='left'>
          <h1 id="hs">JivinKS</h1>
      </div>
      <div className='right'>
          <ul className='list'>
            <li><Link to='Main' smooth={true} duration={1000}><span className='navlist1'>Start</span></Link></li>
            <li><Link to='lmn' smooth={true} duration={1000}><span className='navlist1'>About </span></Link></li>
            <li><Link to='skill' smooth={true} duration={1000}><span className='navlist1'>Skills </span></Link></li>
            <li><Link to='cont' smooth={true} duration={1000}><span className='navlist1'>Contact </span></Link></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar;
