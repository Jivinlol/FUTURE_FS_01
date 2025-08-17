import React, { useRef } from 'react'
import './skills.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const contref = useRef();
  useGSAP(()=>{
  
    gsap.from(ref1.current,{
        scrollTrigger:{
            trigger:ref1.current,
            start:'-20 370',
            end:'110 10',
            scrub:true,
        },
        opacity:0,
        scale:0,
        y:-500

    })
    gsap.from(ref2.current,{
        scrollTrigger:{
            trigger:ref2.current,
            start:'-20 350',
            end:'110 10',
            scrub:true,
            
        },
        opacity:0,
        scale:0,
        y:-500

    })
     gsap.from(ref3.current,{
        scrollTrigger:{
            trigger:ref3.current,
            start:'-20 330',
            end:'110 10',
            scrub:true
            
        },
        opacity:0,
        scale:0,
        y:-500

    })
    gsap.to(ref1.current,{
        scrollTrigger:{
            trigger:ref1.current,
            start:'310 370',
            end:'360 250',
            scrub:true,
           
        },
        rotateY:-180,
        rotateZ:0,
        x:-300

    })
    gsap.to(ref2.current,{
        scrollTrigger:{
            trigger:ref2.current,
            start:'310 370',
            end:'360 250',
            scrub:true,
           
        },
        rotateY:-180,
        rotateZ:0,
        yPercent:-2

    })
    gsap.to(ref3.current,{
        scrollTrigger:{
            trigger:ref3.current,
            start:'310 370',
            end:'368 250',
            scrub:true,
           
        },
        rotateY:-180,
        rotateZ:0,
        x:300,
        yPercent:-4


    })
 

  },{scope:contref})
  return (
    <div name='skill' className='main'>
      <div className='title'>Skills</div>  
      <div className='CardContainer1' ref={contref}>
                <div ref={ref1} id='cards1' className='cards'>
                    <div className='front'>
                        <p className='card2text'>FrontEnd</p>
                        <p className='card2text'>FrontEnd</p>
                        <FaReact size={90} color='black' />
                        <FaReact size={30} color='black' className='bottomleft'  />
                        <FaReact size={30} color='black' className='topright'/>
                    </div>
                    <div className='back'>
                        <div className='backcont'>
                            <p className='card2text'>FrontEnd</p>
                            <p className='card2text'>FrontEnd</p>
                            <FaReact size={30} color='black' className='bottomleft'  />
                            <FaReact size={30} color='black' className='topright'/>
                            <div className='bhead1'>FrontEnd</div>
                            <div className='bcont1'> UI&UX</div>
                            <div className='bcont1'> Reusable Components </div>
                            <div className='bcont1'> Efficient State and <br></br>Data Management</div>
                            <div className='bcont1'>Optimize Performance and<br></br> User Experience</div>
                        </div>
                    </div>
                </div>
                <div id='cards2' ref={ref2} className='cards'>
                    <div className='front'>
                        <p className='card2text'>BackEnd</p>
                        <p className='card2text'>BackEnd</p>
                        <SiSpring size={90} color='black' />
                        <SiSpring size={30} color='black' className='bottomleft' />
                        <SiSpring size={30} color='black' className='topright' />
                    </div>
                    <div className='back'>
                        <div className='backcont'>
                            <p className='card2text'>BackEnd</p>
                            <p className='card2text'>BackEnd</p>
                            <div className='bhead1'>Backend</div>
                            <div className='bcont1'>RESTful API Design <br></br>& Versioning</div>
                            <div className='bcont1'>Secure Authentication &<br></br> Authorization</div>
                            <div className='bcont1'>Exception Handling<br></br> & Logging</div>
                            <div className='bcont1'>Dependency Injection<br></br> & Modular Architecture</div>
                            <div className='bcont1'>Unit & Integration Testing </div>
                            <SiSpring size={30} color='black' className='bottomleft' />
                            <SiSpring size={30} color='black' className='topright' />
                        </div>
                    </div>
                </div>
                <div id='cards3' ref={ref3} className='cards'>
                    <div className='front'>
                        <p className='card2text'>Database</p>
                        <p className='card2text'>Database</p>
                        <SiMysql size={140} color='black' />
                        <SiMysql size={40}  color='black' className='bottomleft'/>
                        <SiMysql size={40}  color='black' className='topright'/>
                    </div>
                    <div className='back'>
                        <div className='backcont'>
                            <p className='card2text'>Database</p>
                             <p className='card2text'>Database</p>
                            <div className='bhead1'>Database</div>
                            <div className='bcont1'>Normalized Schema Design</div>
                            <div className='bcont1'>Optimized Query & Inedin</div>
                            <div className='bcont1'>Backup & Recovery Strategies</div>
                            <div className='bcont1'>Data Integrity &<br></br> Transaction Management</div>
                            <div className='bcont1'>Security & Access Control</div>
                            <SiMysql size={40}  color='black' className='bottomleft'/>
                            <SiMysql size={40}  color='black' className='topright'/>

                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
}

export default Skills;
