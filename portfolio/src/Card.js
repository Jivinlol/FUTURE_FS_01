import React, { useEffect,useRef } from 'react'
import './cards.css'
import gsap from 'gsap';
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Cards = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const contref = useRef();
  const starref = useRef();
  const header = useRef();
  useGSAP(()=>{
    const cards = contref.current.querySelectorAll('.card');

    gsap.fromTo(
      header.current,
      { opacity: 0, y: 200 },  // Start transparent and slightly moved down
      { opacity: 1, y: 220, duration: 1, ease: 'power2.out' }
    );  
    

    gsap.to(header.current,{
      y:0,
      delay:1
    })

    gsap.from(starref.current,{
      y:20,
      opacity:0,
      delay:1.2
    })

    gsap.from(contref.current,{
      y:100,
      opacity:0,
      delay:1.2
    })  
    gsap.to(ref1.current,{
      scrollTrigger:{
        trigger:ref1.current,
        start: 'top 270px',
        end: 'bottom 190px',
        scrub:true,
      },
      x:145,
      y:290,
      rotate:-9
      }
    )
    gsap.to(ref2.current,{
      scrollTrigger:{
        trigger:ref2.current,
        start: 'top 240',
        end: 'bottom 170',
        scrub:true,
      },
      y:270,
      rotate:-1
    })
    gsap.to(ref3.current,{
      scrollTrigger:{
        trigger:ref3.current,
        start: 'top 210',
        end: 'bottom 185',
        scrub:true,
      },
      y:250,
      x:-135,
      rotate:8
    })
    cards.forEach((card,i)=>{
      gsap.to(card,{
      scrollTrigger:{
        trigger:card,
        start: 'top 140px',
        end: 'bottom 138px',
        scrub:true,
      },  
      opacity:0
    })
    })
    cards.forEach((card,i) => {
      var dur=0;
      if(i==1){
        dur=1.5;
      }else if(i==2){
        dur=1.75;
      }else{
        dur=2;
      }
      gsap.to(card,{
      yPercent:-5,
      duration:dur,
      repeat:-1,
      yoyo:true,
      ease:'power1.inOut',
    })
    });
    
  },{scope:contref})
  return (
      <div name='Main' className='Main'>
        <div className='Container'>
              <div className='stars' ref={starref}>
                <div className='group'>★ ★ ★</div>
                <p className='mini'>3012</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p className='mini'>A113</p>
                <div className='group'>★ ★ ★</div>
              </div>
              <h1 ref={header}>FULL STACK DEVELOPER</h1>
              <div className='CardContainer' ref={contref}>
                  <div ref={ref1} id='card1' className='card'>
                    <p className='card1text'>FrontEnd</p>
                    <p className='card1text'>FrontEnd</p>
                    <FaReact size={40}  />
                     <FaReact size={10} className='bottomleft'  />
                      <FaReact size={10}  className='topright'/>
                  </div>
                  <div id='card2' ref={ref2} className='card'>
                    <p className='card1text'>BackEnd</p>
                    <p className='card1text'>BackEnd</p>
                    <SiSpring size={40} />
                    <SiSpring size={10} className='bottomleft' />
                    <SiSpring size={10} className='topright' />
                  </div>
                  <div id='card3' ref={ref3} className='card'>
                    <p className='card1text'>Database</p>
                    <p className='card1text'>Database</p>
                    <SiMysql size={80}  />
                    <SiMysql size={20}  className='bottomleft'/>
                    <SiMysql size={20}  className='topright'/>
                  </div>
              </div>
              <div className='bottom'>
                <p className='para1'>As a web designer, I help design-oriented companies make all their wishes come true, as long as it has to do with a great website.</p>
                <p>React & Spring</p>
              </div>
        </div>
      </div>

  )
}

export default Cards;
