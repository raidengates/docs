import React from 'react'
import Section from '../section/Section'
import { abouts } from '../../data/about.json'
const Info = () => {
  console.log(abouts.FExperience)
  return (
    <section className="c-info pd-t-60">
      <div className="wraper-about container-inner">
        {/* Portfolio */}

        <Section class="c-portfolio" title="Portfolio">
          <div className="top-tag container-inner">
            <div className="about-text">

              <div className="portfolio-item">
                <p className="name">{abouts.Portfolio.FPT.name}</p>
                <p className="resume-details">
                  {abouts.Portfolio.FPT.resume_details}
                </p>
              </div>

              <div className="portfolio-item ">
                <p className="name">{abouts.Portfolio.QA.name}</p>
                <p className="resume-details">
                  {abouts.Portfolio.QA.resume_details}
                </p>
              </div>

              <div className="portfolio-item">
                <p className="name">{abouts.Portfolio.LIINK.name}</p>
                <p className="resume-details">
                  {abouts.Portfolio.LIINK.resume_details}
                </p>
              </div>

              


            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section class="c-for-experience" title="Experience">
          <div className="top-tag container-inner">
            <div className="about-text">
                {
                    abouts.FExperience.map((experience, index) => {
                        return (
                            <p key={index}>
                                <span className="fei-name">{experience.name}</span>
                                <span className="fei-years">{experience.years} years</span>
                            </p>
                        )

                    })
                }                
            </div>
          </div>
        </Section>
      </div>

      <div className="wraper-about container-inner pd-t-60">
        {/* Preferred Environment */}

        <Section class="c-preferred-environment" title="Preferred Environment">
          <div className="top-tag container-inner">
            <div className="about-text">
                <p class="availability">C#, NodeJs, Git, Visual Studio, Windows</p>
            </div>
          </div>
        </Section>

        {/* The most amazing... */}
        <Section class="c-amazing" title="The most amazing..">
          <div className="top-tag container-inner">
            <div className="about-text">
                <p class="availability">...software I've worked on is a huge medical insurance platform with 10+ million users.</p>             
            </div>
          </div>
        </Section>
      </div>
    </section>
  )
}

export default Info
