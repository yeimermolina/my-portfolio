import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <header className='Header'>
    <nav className="navbar">
      <ul className="nav-inner">
        <li className="nav-item">About</li>
        <li className="nav-item">Portfolio</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
