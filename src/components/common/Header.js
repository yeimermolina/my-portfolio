import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames';

const scrollConfig = {
  spy: true,
  smooth: true,
  duration: 1000,
  offset: -60
}

const Header = ({ scrolled}) => {
  const classes = classNames({
    Header: true,
    scrolled
  });

  return (
    <header className={classes}>
      <nav className="navbar">
        <ul className="nav-inner">
          <li className="nav-item"><Link to="about" {...scrollConfig}>About</Link></li>
          <li className="nav-item"><Link to="skills" {...scrollConfig}>Skills</Link></li>
          <li className="nav-item"><Link to="portfolio" {...scrollConfig}>Portfolio</Link></li>
          <li className="nav-item"><Link to="contact" {...scrollConfig}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
