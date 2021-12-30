import React from 'react'
import './App.css'

import Primeiro from './components/primeiro'
import Card from './components/layout/Card'
import ComFilhos from './components/ComFilhos'
import ComParametro from './components/ComParametro'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default props => (
  <div className="App">
    <Card titulo="#06 - Condicional V2">
      <CondicionalComIf numero={11} />
    </Card>

    <Card titulo="#05 - Condicional V1">
      <Condicional numero={10} />
    </Card>

    <Card titulo="#04 - Componente Com Filhos">
      <Repeticao />
    </Card>

    <Card titulo="#03 - Componente Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Lara</li>
          <li>Bruno</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente Com Parametro">
      <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
)
