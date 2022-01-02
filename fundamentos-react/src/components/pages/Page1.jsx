import React from 'react'
import Button from './Button'

const Page1 = props => {
  function goBack() {
    props.history.goBack()
  }
  return (
    <>
      <div style={{ background: 'blue' }}>
        <h1>PAGINA 1</h1>
        <Button onClick={goBack}>Voltar</Button>
      </div>
    </>
  )
}

export default Page1
