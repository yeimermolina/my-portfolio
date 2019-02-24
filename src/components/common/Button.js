import React from 'react'
import Arrow from '../icons/arrow'

const Button = ({ classes, children, type = "button", url }) => (
  <button type={type} className={`Button ${classes}`}>
    <a href={url} target="_blank">{children}</a>
    <span className="arrow">
      <Arrow />
    </span>
  </button>
)

export { Button }
