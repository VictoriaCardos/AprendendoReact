import React from 'react'
import './App.css'

import Primeiro from './components/basicos/primeiro'
import Card from './components/layout/Card'
import ComFilhos from './components/basicos/ComFilhos'
import ComParametro from './components/basicos/ComParametro'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'

export default props => (
  <div className="App">
    <Card titulo="#09 - Input" color="#9C0F5F">
      <Input nome="Victoria" />
    </Card>

    <Card titulo="#08 - Comunicação indireta" color="#000">
      <Super />
    </Card>

    <Card titulo="#07 - Comunicação direta" color="#4298B5">
      <Pai sobrenome="Cardoso" />
    </Card>

    <Card titulo="#06 - Condicional V2" color="#FA6900">
      <CondicionalComIf numero={11} />
    </Card>

    <Card titulo="#05 - Condicional V1" color="#E94C6F">
      <Condicional numero={10} />
    </Card>

    <Card titulo="#04 - Componente Com Filhos" color="#008BBA">
      <Repeticao />
    </Card>

    <Card titulo="#03 - Componente Com Filhos" color="#D96459">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Lara</li>
          <li>Bruno</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente Com Parametro" color="#FF85CB">
      <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
    </Card>

    <Card titulo="#01 - Primeiro Componente" color="#92B06A">
      <Primeiro />
    </Card>
  </div>
)
