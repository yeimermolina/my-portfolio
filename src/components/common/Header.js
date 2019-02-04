import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames';

const scrollConfig = {
  spy: true,
  smooth: true,
  duration: 1000
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
          <li className="nav-item"><Link to="#about2">Portfolio</Link></li>
          <li className="nav-item"><Link to="#about3">Contact</Link></li>
          <li className="nav-item"><Link to="#about4">More</Link></li>
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
