import React, { useState } from 'react'
import Sub from './Sub'

export default props => {
  const [num, setNum] = useState(0)

  function handleClick(value) {
    setNum(value)
  }

  return (
    <div>
      <h4>Valor: {num}</h4>
      <Sub handleClick={handleClick}></Sub>
    </div>
  )
}
