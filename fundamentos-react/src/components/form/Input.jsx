import React, { useState } from 'react'

export default props => {
  const [nome, setName] = useState('')
  return (
    <>
      <h3>
        {props.nome} {nome}
      </h3>
      <input
        type="text"
        value={nome}
        onChange={e => setName(e.target.value)}
      ></input>
    </>
  )
}
