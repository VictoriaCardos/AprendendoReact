import React from 'react'
import Filho from './Filho'

//a primeira e a segunda forma estou pegando o sobrenome que eu dei no App.jsx
export default props => (
  <div>
    <h3>Componente Filho:</h3>

    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Victoria</Filho>
    <Filho sobrenome="Matos">Ana</Filho>
  </div>
)
