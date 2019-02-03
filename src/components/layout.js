import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../styles/index.scss'
import Header from './common/Header'


class Layout extends Component {
  state = {
    scrolled: false
  }

  handleScroll = () => {
    const offset = 500
    if (window.scrollY > offset ) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div className="Layout">
        <Header 
          scrolled={this.state.scrolled}
        />
        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
