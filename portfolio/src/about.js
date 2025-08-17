import React, { useRef } from 'react'
import './about.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
const About = () => {
    const textRef=useRef();

    useGSAP(() => {
        const text = new SplitType("#split-type-text", { types: 'words, chars' })
        gsap.to(text.chars, {
        opacity: 1,
        duration: 0.5,
        stagger: { each: 0.05 },  // Stagger each character's animation by 0.05 seconds
        scrollTrigger: {
            trigger:"#split-type-text",
            start: "top center",
            end: "bottom center",
            scrub:1,
        },
        });

  }, []);

  return (
    <div name='lmn' className='about me'>
        <h1>About Me</h1>
      <div className='content'>
          <h2 id='split-type-text' className='char' ref={textRef}>I am a Computer Science student with a curious mindset to explore and expand my knowledge in the field. As a full-stack developer, I enjoy turning ideas into reality and solving real-world problems using my skills to create meaningful impact. I’m eager to contribute to and collaborate on innovative projects, and continuously grow as a developer in the tech industry.I thrive in dynamic environments where I can learn from others and adapt to new technologies. My goal is to build scalable, user-centric solutions that make a difference.</h2>
     </div>
    </div>
  )
}

export default About;
