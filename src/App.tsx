import React from 'react'
import Header from './Components/Header'
import { GlobalCSS } from './styles'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Sobre from './Components/Sobre'

function App() {
  return (
    <div className="App">
      <>
        <GlobalCSS />
        <Header />
        <Hero />
        <Sobre />
        <Footer />
      </>
    </div>
  )
}

export default App
