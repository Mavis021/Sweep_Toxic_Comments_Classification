import React from 'react'
import InputComponentStyled from './InputComponentStyled'

const InputComment = ({ value, onChange, onKeyDown }) => {
  return (
    <div>
      <InputComponentStyled
        type="text"
        value={value || ''}
        placeholder="Enter the comment"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  )
}

export default InputComment