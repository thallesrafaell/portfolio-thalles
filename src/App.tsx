import { GlobalCSS } from './styles'

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
