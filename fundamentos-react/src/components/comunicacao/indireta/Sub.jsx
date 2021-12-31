import React from 'react'

export default props => {
  return (
    <div>
      <button
        onClick={() => {
          props.handleClick(Math.random())
        }}
      >
        Alterar
      </button>
    </div>
  )
}
