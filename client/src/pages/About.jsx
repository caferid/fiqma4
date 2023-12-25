import React from 'react'
import About_hero from '../component/about_hero'
import About_10k from '../component/about_10k'
import Catdirilma from '../component/catdirilma'
import Userler from '../component/userler'

function About() {
  return (
    <div >
     <About_hero/>
     <About_10k/>
     <Userler/>
     
     <Catdirilma/>
    </div>
  )
}

export default About