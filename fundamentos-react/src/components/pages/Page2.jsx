import React from 'react'
import Button from './Button'

const Page2 = props => {
  function goBack() {
    props.history.goBack()
  }
  return (
    <>
      <div style={{ background: 'red' }}>
        <h1>PAGINA 2</h1>
        <Button onClick={goBack}>Voltar</Button>
      </div>
    </>
  )
}

export default Page2
