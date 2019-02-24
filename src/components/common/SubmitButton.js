import React from 'react'

const SubmitButton = ({ classes, children, type = "button", onClick }) => (
  <button type={type} className={`Button ${classes}`} onClick={onClick}>
    <a href='' target="_blank">{children}</a>
  </button>
)

export { SubmitButton }