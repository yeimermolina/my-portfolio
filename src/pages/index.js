import React from 'react'

import Layout from '../components/layout'
import Avatar from '../images/prueba2.jpg'
import SEO from '../components/seo'
import { Button } from '../components/common'

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
  </Layout>
)

export default IndexPage
