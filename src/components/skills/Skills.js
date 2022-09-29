import React, { useRef } from 'react'
import { Fade } from 'react-reveal'
import {skills} from '../../data/skills.json'
const Skills = () => {
  

  return (
    <section className="c-employment pd-t-60">
    <div className="wraper-about container-inner">
      <div className="left">
        <Fade left duration={1000} distance="70px">
          <h1 className="section-title">Skills</h1>
        </Fade>
      </div>

      <div className="right">
        <div className="content-item">
          {skills.map((item, index) => {
            return (
              <div key={index} className="item-project">
                <h3 className="item-role">{item.skillName}</h3>
                <p className='item-info' >{item.details}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills
