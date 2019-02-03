import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/index.scss'
import Header from './common/Header'


const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    <div className="main">
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
