import React from 'react'
import './SubmitButton.css'

const SubmitButton = ({ children, className = "", inverted = false }) => {
  const btnClassName = `submit-btn ${inverted ? 'submit-btn_inverted' : ''} ${className}`;

  return (
    <button
      className={btnClassName}
      type="submit"
    >
      {children}
    </button>
  )
}

export default SubmitButton