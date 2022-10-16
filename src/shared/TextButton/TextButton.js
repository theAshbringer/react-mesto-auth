import React from 'react'
import './TextButton.css'

const TextButton = ({ fontSize, className, children }) => {

  const btnClassName = `text-button ${className}`;

  return (
    <button
      className={btnClassName}
      style={{
        fontSize: `${fontSize}px`,
      }}
    > {children}</button >
  )
}

export default TextButton