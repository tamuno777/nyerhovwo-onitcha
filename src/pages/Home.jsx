import React from 'react'
import {motion } from 'framer-motion'
import Transition from '../transition'
import Intro from '../homesection/Intro'
import Slack from '../homesection/Slack'
// import Education from '../homesection/Education'
import Contact from '../homesection/Contact'

export default function Home() {
  return (
    <div className='p-5 home-container' style={{width:"100%", overflow:"hidden"}}>
      <Transition>
      <Intro/>
      <Slack/>
      {/* <Education/> */}
      <Contact/>
    </Transition>
    </div>
  )
}
