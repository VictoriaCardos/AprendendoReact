import React from 'react'

export default props => {
  return (
    <div>
      <button onClick={props.OnInc}>+</button>
      <button onClick={props.OnDec}>-</button>
    </div>
  )
}
