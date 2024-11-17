import React from 'react'
import InputComponentStyled from './InputComponentStyled'

const InputComment = ({value, onChange}) => {
  return (
    <div>
      <InputComponentStyled
        type="text"
        value={value || ''}
        placeholder="Enter the comment"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default InputComment