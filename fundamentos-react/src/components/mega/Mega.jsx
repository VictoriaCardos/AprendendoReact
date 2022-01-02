import React, { useState } from 'react'

export default props => {
  const [number, setNumber] = useState(Array(props.qtdeNumero).fill(0))

  function gerarNumerosNaoContido(array) {
    const min = 1
    const max = 60
    const novoNumber = parseInt(Math.random() * (max - min)) + min
    return array.includes(novoNumber)
      ? gerarNumerosNaoContido(array)
      : novoNumber
  }

  function gerarNumeros() {
    const novoArray = Array(props.qtdeNumero)
      .fill(0)
      .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
      .sort((a, b) => a - b)
    setNumber([novoArray])
  }

  return (
    <>
      <h3>Mega: </h3>
      <h4>{number.join(' ')}</h4>
      <button onClick={gerarNumeros}>Gerar Números</button>
    </>
  )
}
