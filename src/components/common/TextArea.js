import React from 'react';

const TextArea = (props) => (
  <div className="TextArea">
    <textarea
      name={props.name}
      value={props.value}
      placeholder={props.name}
      onChange={props.handleChange}
      rows="10"
    />
  </div>
)

export { TextArea }