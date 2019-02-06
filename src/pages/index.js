import React from 'react'

import Layout from '../components/layout'
import Avatar from '../images/prueba2.jpg'
import Image1 from '../images/imagen1.jpg'
import Image2 from '../images/imagen2.jpg'
import Image3 from '../images/imagen3.jpg'
import SEO from '../components/seo'
import { Button, Carousel } from '../components/common'
import ReactIcon from '../components/icons/react-icon'
import JSIcon from '../components/icons/js-icon'
import HTML5 from '../components/icons/html5-icon'
import ReduxIcon from '../components/icons/redux-icon'
import Github from '../components/icons/github'
import Linkedin from '../components/icons/linkedin'
import Instagram from '../components/icons/instagram'
import Twitter from '../components/icons/Twitter'



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
          <div className="social-icons">
            <a href="https://github.com/yeimermolina" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com/in/yeimermolina/" target="_blank"><Linkedin /></a>
            <a href="https://www.instagram.com/yeimergabriel/"><Instagram /></a>
            <a href="https://twitter.com/yeimergabriel"><Twitter /></a>
          </div>
        </div>
        
        <div className="right-content">
          <div className="tech-item">
            <span className="tech-icon"><ReactIcon /></span>
            <span className="tech-name">React JS</span>
            <span className="tech-score">Basic</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><ReduxIcon /></span>
            <span className="tech-name">Redux</span>
            <span className="tech-score">Intermediate</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><HTML5 /></span>
            <span className="tech-name">HTML5</span>
            <span className="tech-score">Advanced</span>
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
    <section name="portfolio" id="portfolio">
      <div className="SectionTitle">Portfolio</div>
      <div className="container">
        <div className="item level1">
          <img src={Image1}/>
          <div className="text project-name">
            <div className="bold">Myopain Seminars</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level2">
          <img src={Image2}/>
          <div className="text project-name">
            <div className="bold">Bootcampmap</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level3">
          <img src={Image3}/>
          <div className="text project-name">
            <div className="bold">Pepper</div>
            <span className="highlight pink">Bigcommerce</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level1">
          <img src={Image1}/>
          <div className="text project-name">
            <div className="bold">Parrospace</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level2">
          <img src={Image2}/>
          <div className="text project-name">
            <div className="bold">Parrolabs</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level3">
          <img src={Image3}/>
          <div className="text project-name">
            <div className="bold">World Bible School</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level1">
          <img src={Image1}/>
          <div className="text project-name">
            <div className="bold">World Bible School</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level2">
          <img src={Image2}/>
          <div className="text project-name">
            <div className="bold">World Bible School</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
        <div className="item level3">
          <img src={Image3}/>
          <div className="text project-name">
            <div className="bold">World Bible School</div>
            <span className="highlight pink">ReactJS</span>
          </div>
          <Button classes="view-project">
            View More
          </Button>
        </div>
      </div>
    </section>
    <section name="courses" id="courses">
      <div className="SectionTitle">Courses</div>
      <div className="courses-slider-container">
        <Carousel />
      </div>
      
    </section>
    <section name="contact" id="contact">
      <div className="SectionTitle">Contact</div>
    </section>
  </Layout>
)

export default IndexPage
