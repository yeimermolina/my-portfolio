import React from 'react'

import Layout from '../components/layout'
import Avatar from '../images/prueba2.jpg'
import SEO from '../components/seo'
import { Button } from '../components/common'
import ReactIcon from '../components/icons/react-icon'
import JSIcon from '../components/icons/js-icon'
import HTML5 from '../components/icons/html5-icon'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="Hero-inner" style={{ textAlign: "center" }}>
        <h1 className="text title">
          Hi, I am <span className="highlight">Yeimer Molina</span>
        </h1>
        <span className="text">I'm a Software Developer</span>
        <Button classes="view-more">
          View More
        </Button>
      </div>
      {/* <img className="Avatar" src={Avatar} alt='avatar'/> */}
    </div>
    <section id="about" name="about">
      <div className="SectionTitle">About</div>
      <div className="inner">
        <div className="left-content">
          <img src={Avatar} alt="avatar"/>
          <p className="text">I am Software Developer from Venezuela, but I am currently living in Colombia. I like learning about new technologies</p>
        </div>
        
        <div className="right-content">
          <div className="tech-item">
            <span className="tech-icon"><ReactIcon /></span>
            <span className="tech-name">React JS</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><JSIcon /></span>
            <span className="tech-name">Javascript</span>
            <span className="tech-score">37%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><HTML5 /></span>
            <span className="tech-name">HTML5</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><ReactIcon /></span>
            <span className="tech-name">React JS</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><JSIcon /></span>
            <span className="tech-name">Javascript</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><HTML5 /></span>
            <span className="tech-name">HTML5</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><ReactIcon /></span>
            <span className="tech-name">React JS</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><JSIcon /></span>
            <span className="tech-name">Javascript</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><HTML5 /></span>
            <span className="tech-name">HTML5</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><HTML5 /></span>
            <span className="tech-name">HTML5</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><ReactIcon /></span>
            <span className="tech-name">React JS</span>
            <span className="tech-score">87%</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><JSIcon /></span>
            <span className="tech-name">Javascript</span>
            <span className="tech-score">87%</span>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
