import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames';

const Header = ({ scrolled}) => {
  const classes = classNames({
    Header: true,
    scrolled
  });
  return (
    <header className={classes}>
      <nav className="navbar">
        <ul className="nav-inner">
          <li className="nav-item"><Link to="#about">About</Link></li>
          <li className="nav-item"><Link to="#about">Portfolio</Link></li>
          <li className="nav-item"><Link to="#about">Contact</Link></li>
          <li className="nav-item"><Link to="#about">More</Link></li>
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
