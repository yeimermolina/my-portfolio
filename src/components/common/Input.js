import React from 'react';

const Input = (props) => (
  <div className="Input">
    <input
      name={props.name}
      value={props.value}
      placeholder={props.name}
      onChange={props.handleChange}
    />
  </div>
)

export { Input }
