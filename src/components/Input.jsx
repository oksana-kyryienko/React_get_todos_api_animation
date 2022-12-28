import React, { useState } from "react"

export const Input = () => {
  const [value, setValue] = useState('Change me');

  return (
    <>
     <h1>{value}</h1>
     <input 
        type="text" 
        value={value} 
        onChange={event => setValue(event.target.value)}
      />
    </>
  )
}