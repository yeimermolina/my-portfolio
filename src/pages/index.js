import React, { Component } from 'react'

import Layout from '../components/layout'
import Avatar from '../images/prueba2.jpg'
import SEO from '../components/seo'
import { Button, Input, TextArea, SubmitButton } from '../components/common'
import ReactIcon from '../components/icons/react-icon'
import JSIcon from '../components/icons/js-icon'
import HTML5 from '../components/icons/html5-icon'
import ReduxIcon from '../components/icons/redux-icon'
import Github from '../components/icons/github'
import Linkedin from '../components/icons/linkedin'
import Instagram from '../components/icons/instagram'
import Twitter from '../components/icons/twitter'

class IndexPage extends Component {
  state = {
    name: '',
    subject: '',
    content: ''
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleClick = () => {
    console.log("click");
  }

  render () {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="Hero">
         
          <div className="Hero-inner" style={{ textAlign: "center" }}>
            <img src={Avatar} alt="avatar"/>
            <h1 className="text title">
              <span className="highlight">Yeimer Molina</span>
            </h1>
            <span className="text">Software Developer</span>
            <div className="social-icons">
              <a href="https://github.com/yeimermolina" target="_blank"><Github /></a>
              <a href="https://www.linkedin.com/in/yeimermolina/" target="_blank"><Linkedin /></a>
              <a href="https://www.instagram.com/yeimergabriel/"><Instagram /></a>
              <a href="https://twitter.com/yeimergabriel"><Twitter /></a>
            </div>
          </div>
        </div>
        <section id="about" name="about">
          <div className="SectionTitle">About</div>
          <p className="text about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </section>
        <section id="skills" name="skills">
          <div className="SectionTitle">Skills</div>
          <div className="inner">
          <div className="tech-item">
            <span className="tech-icon"><ReactIcon /></span>
            <span className="tech-name">React JS</span>
            <span className="tech-score">Advanced</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon"><ReduxIcon /></span>
            <span className="tech-name">Redux</span>
            <span className="tech-score">Advanced</span>
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
        </section>
    
        <section name="portfolio" id="portfolio">
          <div className="SectionTitle">Portfolio</div>
          <div className="container">
            <div className="item level1">
              <div className="img pepper"></div>
              <div className="text project-name">
                <div className="bold">Pepper</div>
                <span className="highlight pink">
                  E-commerce site built with Stencil Bigcommerce.
                </span>
              </div>
              <Button classes="view-project" url="http://moon-llc.mybigcommerce.com/">
                View Website
              </Button>
            </div>
            <div className="item level2">
            <div className="img parrospace"></div>
              <div className="text project-name">
                <div className="bold">Parrospace</div>
                <span className="highlight pink">
                  Static Website built with GatsbyJs
                </span>
              </div>
              <Button classes="view-project">
                View More
              </Button>
            </div>
            <div className="item level3">
              <div className="img myopain"></div>
              <div className="text project-name">
                <div className="bold">Myopain Seminars</div>
                <span className="highlight pink">Wep application for Dry Needling Courses, Built in ReactJS</span>
              </div>
              <Button classes="view-project">
                View More
              </Button>
            </div>
            <div className="item level1">
              <div className="img bootcampmap"></div>
              <div className="text project-name">
                <div className="bold">Bootcampmap</div>
                <span className="highlight pink">Wep application that help people find tech bootcamps around the world, Built in ReactJS, it is still under construction</span>
              </div>
              <Button classes="view-project">
                View More
              </Button>
            </div>
            <div className="item level2">
              <div className="img divbuilder"></div>
              <div className="text project-name">
                <div className="bold">Div Builder</div>
                <span className="highlight pink">Personal test project built with ReactJS</span>
              </div>
              <Button classes="view-project">
                View More
              </Button>
            </div>
            <div className="item level3">
              <div className="img burgerbuilder"></div>
              <div className="text project-name">
                <div className="bold">Burger Builder</div>
                <span className="highlight pink">ReactJS</span>
              </div>
              <Button classes="view-project">
                View More
              </Button>
            </div>
            <div className="item level1">
              <div className="img platzivideo"></div>
              <div className="text project-name">
                <div className="bold">Platzivideo</div>
                <span className="highlight pink">ReactJS</span>
              </div>
              <Button classes="view-project">
                View More
              </Button>
            </div>
            <div className="item level3">
              <div className="img rn-jobs"></div>
              <div className="text project-name">
                <div className="bold">Jobs Finder</div>
                <span className="highlight pink">Personal test application built with React Native</span>
              </div>
              <Button classes="view-project">
                View More
              </Button>
            </div>
          </div>
        </section>
        <section name="contact" id="contact">
          <div className="SectionTitle">Contact</div>
          <div className="inner">
            <Input 
              name="name"
              value={this.state.name}
              handleChange={this.handleInput}
            />
            <Input 
              name="subject"
              value={this.state.subject}
              handleChange={this.handleInput}
            />
            <TextArea 
              name="content"
              value={this.state.content}
              handleChange={this.handleInput}
            />
            <SubmitButton classes="view-project" onClick={this.handleClick}>
              SEND
            </SubmitButton>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
