import React from 'react'
import Navbutton from '../component/Navbutton'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Intro() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end developer", "Web developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='intro-container pb-5 text-light' style={{overflow:"hidden"}}>
      <div className="my-name">
        <h1>WINNIE DAVIS</h1>
      </div>
      <div className="profession">
        <h5> <span ref={el}></span></h5>
        <h5></h5>
        <h5></h5>
      </div>
      <div className="about-me">
        <p>Hey there! I’m a creative front-end web developer.</p>
        <p>I'm passionate about creating beautiful and user-friendly web applications. I'm also a quick learner and I'm always up for a challenge.  </p>
        <p>based in Abuja, NG.</p>

        
       
      </div>
      <div className="project-link">
      <div style={{fontSize:"12px",fontWeight:"bold",height:"fit-content",border:"none"}}  ><Navbutton title="EXPLORE PROJECTS" to="/Projects" /></div>

      </div>
      <div className="social cols d-flex">
        <a className='btnClass d-block m-2 py-1 px-3' href="https://twiter.com/niedavies?s=21"  onClick={() => {
                    navigate('/Home');
                  }}>Twitter</a>
        <a className='btnClass d-block m-2 py-1 px-3'  href="https://www.linkedin.com/in/winnie-davis-1aa069246"  onClick={() => {
                    navigate('/Home');
                  }}>Linkdin</a>
        <a className='btnClass d-block m-2 py-1 px-3'  href="https://github.com/tamuno777/"  onClick={() => {
                    navigate('/Home');
                  }}>Github</a>
      </div>
    </div>
  )
}
