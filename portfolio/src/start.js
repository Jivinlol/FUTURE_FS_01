// CustomCursor.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './start.css'; // Make sure this file has your cursor styles

const Start = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Start;
