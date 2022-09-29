import React from 'react'
import { Fade } from 'react-reveal'
import {employment} from '../../data/skills.json'
const Employment = () => {
    console.log(employment)
  return (
    <section className="c-employment pd-t-60">
      <div className="wraper-about container-inner">
        <div className="left">
          <Fade left duration={1000} distance="70px">
            <h1 className="section-title">Employment</h1>
          </Fade>
        </div>

        <div className="right">
          <div className="content-item">
            {employment.map((item, index) => {
              return (
                <div key={index} className="item">
                  <h3 className="item-role">{item.role}</h3>
                  <p className="item-subtitle">
                    {item.company} {item.date}
                  </p>
                  <ul>
                    {item.descriptions.map((description, i) => {
                      return <li key={i}>{description}</li>
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Employment
