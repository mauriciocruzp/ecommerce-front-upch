import React from 'react'

const TextError = ({ children }) => {
  return (
    <p className='text-red-500 text-sm'>{children}</p>
  )
}

export default TextError