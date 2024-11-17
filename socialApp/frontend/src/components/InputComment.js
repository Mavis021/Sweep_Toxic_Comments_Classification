import React from 'react'

const InputComment = ({value, onChange}) => {
  return (
    <div>
      <input
        type="text"
        value={value || ''}
        placeholder="Enter the comment"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default InputComment