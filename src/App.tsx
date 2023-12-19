import React from 'react'
import Header from './Components/Header'
import { GlobalCSS } from './styles'
import Hero from './Components/Hero'

function App() {
  return (
    <div className="App">
      <>
        <GlobalCSS />
        <Header />
        <Hero />
      </>
    </div>
  )
}

export default App
