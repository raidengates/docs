import React, { useRef } from 'react'
import { Fade } from 'react-reveal'
import {abouts} from '../../data/about.json'
const Education = () => {

  return (
    <section className="c-employment pd-t-60">
    <div className="wraper-about container-inner">
      <div className="left">
        <Fade left duration={1000} distance="70px">
          <h1 className="section-title">Education</h1>
        </Fade>
      </div>

      <div className="right">
        <div className="content-item">
          {abouts.Education.map((item, index) => {
            return (
              <div key={index} className="item-project">
                <h3 className="item-role">{item.degree}</h3>
                <p className='item-info'>{item.school} {item.graduation_year}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Education
