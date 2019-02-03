import React from 'react'
import Arrow from '../icons/arrow'

const Button = ({ classes, children, type = "button" }) => (
  <button type={type} className={`Button ${classes}`}>
    {children}
    <span className="arrow">
      <Arrow />
    </span>
  </button>
)

export { Button }
