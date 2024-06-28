import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
const Skills = () => {
  return (
   <section className="skills section" id="skills">
        <div className="skills__header">
        <h2 className="section__title">Skills</h2>
        <span className='section__subtitle'>My Technical Level</span>
        </div>

        <div className="skills_container container grid">
            <Frontend />
            <Backend />
        </div>
   </section>
  )
}

export default Skills
