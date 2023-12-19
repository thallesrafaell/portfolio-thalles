import { cp } from 'fs'
import { createGlobalStyle } from 'styled-components'

export const Cores = {
  azul: '#2B53E0',
  branco: '#F9F9F9',
  preto: '#171717',
  cinzaEscuro: '#212121',
  cinzaMedio: '#333333',
  cinzaClaro: '#828282'
}
export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.cinzaEscuro};
    color: ${Cores.branco};

    .container {
      max-width: 1140px;
      width: 100%;
      margin: 0 auto;
    }
  }
`
