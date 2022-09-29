import React from 'react'
import { Fade } from 'react-reveal'
import {experience} from '../../data/skills.json'
const Experience = () => {
  return (
    <section className="c-employment pd-t-60">
    <div className="wraper-about container-inner">
      <div className="left">
        <Fade left duration={1000} distance="70px">
          <h1 className="section-title">Experience</h1>
        </Fade>
      </div>

      <div className="right">
        <div className="content-item">
          {experience.map((item, index) => {
            return (
              <div key={index} className="item-project">
                <h3 className="item-role">{item.project}</h3>
                {item.details.map((description, i) => {
                    return <p className='project-description' key={i}>{description}</p>
                  })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Experience
