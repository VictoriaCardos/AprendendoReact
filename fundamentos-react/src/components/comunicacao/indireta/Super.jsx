import React from 'react'
import Sub from './Sub'

export default props => {
  function handleClick(value) {
    console.log('Ação!!!')
    console.log(value)
  }

  return (
    <div>
      <h4>Valor</h4>
      <Sub handleClick={handleClick}></Sub>
    </div>
  )
}
