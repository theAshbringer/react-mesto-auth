import React from 'react'
import './FormInput.css'

const FormInput = ({
  inverted = false,
  className = '',
  ...props
}) => {

  const inputClassName = `form-input ${inverted ? 'form-input_inverted' : ''} ${className}`;

  return (
    <input className={inputClassName} {...props} />
  )
}

export default FormInput