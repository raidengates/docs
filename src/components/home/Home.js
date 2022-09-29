import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import Particles from "react-tsparticles";
import config from '../../config'
import profile from '../../images/matt.png'
import linkedin from '../../images/social/linkedin.png'
import { home } from '../../data/home.json'
import { loadFull } from "tsparticles";


const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (

    <div className="home">
    <Particles
        id="tsparticles"
        className="particles" 
        init={particlesInit}
        options={config.particles}
      />

      <div className="c-home container-inner">
          
          
        <Bounce cascade className="linkedin">
          <div className="links">
            <a
              href={home.info_linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin Logo" width="50px" />
            </a>
          </div>
        </Bounce>

        <div className="home">
      
          <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
            <Fade bottom distance="100px">
              <img
                className="profile"
                alt="m.jigalin profile"
                src={profile}
                onLoad={() => setImageLoaded(true)}
              />
              <h1 className="greeting-text">
                Hi, I'm <span className="name">{home.info_name}</span>.{' '}
                <span className="wave-emoji" role="img" aria-label="waving hand">
                  👋
                </span>
              </h1>
              <h3 className="greeting-text greeting-text--info">
                {/* <Typewriter
                  options={{
                    strings: home.info_bio,
                    autoStart: true,
                    loop: false,
                    deleteSpeed: 100,
                    cursor: '_',
                    delay: 25,
                  }}
                /> */}
                {home.info_bio}
              </h3>
            </Fade>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Home
