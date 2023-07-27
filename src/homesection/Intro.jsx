import React from 'react'
import Navbutton from '../component/Navbutton'
import code from '/assets/code.jpg'

export default function Intro() {
  return (
    <div className='intro-container pb-5 text-light' style={{overflow:"hidden"}}>
      <div className="my-name">
        <h1>WINNIE DAVIS</h1>
      </div>
      <div className="profession">
        <h5>Front-end developer</h5>
        <h5>Web developer</h5>
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
        <a className='btnClass d-block m-1 py-1 px-3' href="https://twiter.com/niedavies?s=21"  onClick={() => {
                    navigate('/Home');
                  }}>Twitter</a>
        <a className='btnClass d-block m-2 py-1 px-3'  href="https://www.linkedin.com/in/winnie-davis-1aa069246"  onClick={() => {
                    navigate('/Home');
                  }}>Linkdin</a>
        <a className='btnClass d-block m-1 py-1 px-3'  href="https://github.com/tamuno777/"  onClick={() => {
                    navigate('/Home');
                  }}>Github</a>
      </div>
    </div>
  )
}
