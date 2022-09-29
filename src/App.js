import React from 'react'
import './App.css'
import Home from './components/home/Home'
import './style/style.scss'

import Tag from './components/tag/tag'
import Info from './components/infomation/info'

import Employment from './components/employment/employment'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Education from './components/education/education'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'
function App() {
  return (
    <div className="App">
      <Home />
      <div className="container pd-t-60">
        <Tag />
        <Info />
        <Employment />
        <Experience />
        <Skills />
        <Education />
        {/* <TopButton/> */}
      </div>

      <Footer />
    </div>
  )
}

export default App
