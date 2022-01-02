import React from 'react'

export default props => {
  return (
    <div>
      <label for="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={e => props.OnPassoChange(+e.target.value)}
        style={{ fontSize: '1.4rem', width: '60px' }}
      />
    </div>
  )
}
