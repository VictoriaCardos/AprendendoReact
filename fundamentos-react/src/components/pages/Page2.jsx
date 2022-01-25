import React from 'react'
import Button from './Button'
import Card from '../layout/Card'

const Page2 = props => {
  function goBack() {
    props.history.goBack()
  }
  return (
    <Card titulo="#page 2" color="red">
      <h1>PAGINA 2</h1>
      <Button onClick={goBack}>Voltar</Button>
    </Card>
  )
}

export default Page2
