import React from 'react'
import Button from './Button'

const Page3 = props => {
  function goBack() {
    props.history.goBack()
  }
  return (
    <>
      <div style={{ background: 'green' }}>
        <h1>PAGINA 3</h1>
        <Button onClick={goBack}>Voltar</Button>
      </div>
    </>
  )
}

export default Page3
