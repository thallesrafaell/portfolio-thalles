import React from 'react'
import Header from './Components/Header'
import { GlobalCSS } from './styles'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Sobre from './Components/Sobre'
import Projetos from './Containers/Projetos/Index'
import Skill from './Components/MinhasSkill'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
