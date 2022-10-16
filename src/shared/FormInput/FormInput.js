import React from 'react'
import './FormInput.css'

const FormInput = (props) => {
  const {
    value,
    setValue,
    id,
    type,
    placeholder,
    inverted = false,
    required = false,
    className = '',
    minLength = 2,
    maxLength = 40,

  } = props;

  const inputClassName = `form-input ${inverted ? 'form-input_inverted' : ''} ${className}`;

  return (
    <input
      value={value ?? ''}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      name={id}
      id={id}
      className={inputClassName}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  )
}

export default FormInput